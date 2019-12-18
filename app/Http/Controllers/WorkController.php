<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Work;
use App\User;
use App\Group;

class WorkController extends Controller
{
    function index(Request $request)
    {
        $user = Auth::user();
        // print($user);
        $groups = $user->groups()->where('id', $request->group_id)->get();
        $res = array();
        foreach ($groups as $group) {
            foreach ($group->works()->get() as $work) {
                $work_info = $work->only(
                    "id",
                    "name",
                    "description",
                    "status",
                    "priority",
                    "score",
                    "progress",
                    "start_date",
                    "due_date"
                );
                $work_info["parent_id"] = null;

                $current_user  = $work->users()->find($user->id);
                if ($current_user) {
                    $current_user_role = $current_user->pivot->role;
                } else {
                    $current_user_role = null;
                }
                $work_info["current_user_role"] = $current_user_role;
                $ids_raw = DB::table('work_pivots')
                    ->select('work_id')
                    ->where('parent_id', $work->id)
                    ->get();
                $child_works_ids = array();
                foreach ($ids_raw as $id_raw) {
                    array_push($child_works_ids, $id_raw->work_id);
                }
                $child_works = DB::table('works')
                    ->whereIn('id', array_values($child_works_ids))
                    ->get();
                $work_info["items"] = $this->getWorkInfo($child_works, $work->id);
                array_push($res, $work_info);
            }
        }
        $res = $this->filterGetWorks($res);
        return response()->json($res);
    }

    function workBasicInfo(Request $request)
    {
        $user = Auth::user();
        $groups = $user->groups()->where('id', $request->group_id)->get();
        $res = array();
        foreach ($groups as $group) {
            foreach ($group->works()->get() as $work) {
                $work_info["id"] = $work["id"];
                $work_info["title"] = $work["name"];
                $work_info["parent_id"] = null;

                $ids_raw = DB::table('work_pivots')
                    ->select('work_id')
                    ->where('parent_id', $work->id)
                    ->get();
                $child_works_ids = array();
                foreach ($ids_raw as $id_raw) {
                    array_push($child_works_ids, $id_raw->work_id);
                }
                $child_works = DB::table('works')
                    ->whereIn('id', array_values($child_works_ids))
                    ->get();
                $work_info["children"] = $this->getWorkBasicInfo($child_works, $work->id);
                array_push($res, $work_info);
            }
        }
        return response()->json($res);
    }

    function create(Request $request)
    {
        try {
            $work = new Work();
            $data = json_decode($request->getContent(), true);
            $work["name"] = $data["name"];
            $work["description"] = $data["description"];
            $work["priority"] = $data["priority"];
            $work["start_date"] = $data["start_date"];
            $work["due_date"] = $data["due_date"];
            $work["group_id"] = $data["group_id"];
            $work["target_id"] = $data["target_id"];

            if ($work->save()) {
                if ($data["parent_id"]) {
                    DB::table('work_pivots')->insert(
                        [
                            'parent_id' => $data["parent_id"],
                            'work_id' => $work->id,
                        ]
                    );    
                }              
                foreach ($data["responsible"] as $uid) {
                    $user = User::find($uid);
                    $user->works()->attach(
                        $work,
                        ['role' => 'Responsible']
                    );
                }
                foreach ($data["accountable"] as $uid) {
                    $user = User::find($uid);
                    $user->works()->attach(
                        $work,
                        ['role' => 'Accountable']
                    );
                }
                foreach ($data["consulted"] as $uid) {
                    $user = User::find($uid);
                    $user->works()->attach(
                        $work,
                        ['role' => 'Consulted']
                    );
                }
                foreach ($data["informed"] as $uid) {
                    $user = User::find($uid);
                    $user->works()->attach(
                        $work,
                        ['role' => 'Informed']
                    );
                }
                return response()->json($work);
            } else {
                return response(null, Response::HTTP_BAD_REQUEST);
            }
        } catch (Exception $e) {
            return response($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    function getWorkInfo($works, $parent_id)
    {
        $user = Auth::user();
        $res = array();
        foreach ($works as $work) {
            $work_info = array();
            $work_info["id"] = $work->id;
            $work_info["name"] = $work->name;
            $work_info["description"] = $work->description;
            $work_info["status"] = $work->status;
            $work_info["priority"] = $work->priority;
            $work_info["score"] = $work->score;
            $work_info["progress"] = $work->progress;
            $work_info["start_date"] = $work->start_date;
            $work_info["due_date"] = $work->due_date;
            $work_info["parent_id"] = $parent_id;

            $xwork = $user->works()->find($work->id);
            if ($xwork) {
                $current_user  = $xwork->users()->find($user->id);
                if ($current_user) {
                    $current_user_role = $current_user->pivot->role;
                } else {
                    $current_user_role = null;
                }
            } else {
                $current_user_role = null;
            }

            $work_info["current_user_role"] = $current_user_role;
            $ids_raw = DB::table('work_pivots')
                ->select('work_id')
                ->where('parent_id', $work->id)
                ->get();
            $child_works_ids = array();
            foreach ($ids_raw as $id_raw) {
                array_push($child_works_ids, $id_raw->work_id);
            }
            $child_works = DB::table('works')
                ->whereIn('id', array_values($child_works_ids))
                ->get();
            if (!empty($child_works)) {
                $work_info["items"] = $this->getWorkInfo($child_works, $work->id);
            } else {
                $work_info["items"] = null;
            }

            array_push($res, $work_info);
        }
        if (!empty($res)) {
            return $res;
        } else {
            return null;
        }
    }
    function analyze()
    {
        try {
            $user = Auth::user();
            $user_id = $user["id"];
            $result = DB::table('user_work')
                ->join('works', 'user_work.work_id', '=', 'works.id')
                ->where('user_work.user_id', $user_id)
                ->selectRaw('status, count(status) AS number')
                ->groupBy('status')
                ->get();
            return response()->json($result);
        } catch (Exception $e) {
            return response($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    function getWorkBasicInfo($works, $parent_id)
    {
        $user = Auth::user();
        $res = array();
        foreach ($works as $work) {
            $work_info = array();
            $work_info["id"] = $work->id;
            $work_info["title"] = $work->name;
            $work_info["parent_id"] = $parent_id;

            $ids_raw = DB::table('work_pivots')
                ->select('work_id')
                ->where('parent_id', $work->id)
                ->get();
            $child_works_ids = array();
            foreach ($ids_raw as $id_raw) {
                array_push($child_works_ids, $id_raw->work_id);
            }
            $child_works = DB::table('works')
                ->whereIn('id', array_values($child_works_ids))
                ->get();
            if (!empty($child_works)) {
                $work_info["children"] = $this->getWorkBasicInfo($child_works, $work->id);
            } else {
                $work_info["children"] = null;
            }

            array_push($res, $work_info);
        }
        if (!empty($res)) {
            return $res;
        } else {
            return null;
        }
    }

    function filterGetWorks($works) {
        $parent_ids = collect($works)->map(function($work){
            return $work["id"];
        });

        foreach($works as $work) {
            if($work["items"]) {
                $parent_ids = $this->filterWorkParents($parent_ids, $work["items"]);
            }
        }

        $parent_ids = $parent_ids->toArray();
        $works = collect($works)->filter(function($work) use ($parent_ids) {
            return in_array($work["id"], $parent_ids);
        });

        return $works;
    }

    function filterWorkParents($parent_ids, $children) {
        foreach($children as $child) {
            if($child["items"]) {
                $parent_ids = $parent_ids->filter(function($parent_id) use ($child){
                    return $parent_id != $child["id"];
                }); 
                $parent_ids = $this->filterWorkParents($parent_ids, $child["items"]);
            } else {
                $parent_ids = $parent_ids->filter(function($parent_id) use ($child){
                    return $parent_id != $child["id"];
                });    
            }
        }
        return $parent_ids;
    }

    function getWorkUser()
    {
        $user = Auth::user();
        $id = Auth::user()->id;
        try {
            $result = DB::table('user_work')
                ->join('works', 'user_work.work_id', '=', 'works.id')
                ->where('user_work.user_id', $id)
                ->select('works.*')
                ->get();
            return response()->json($result);
        } catch (Exception $e) {
            return response($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}
