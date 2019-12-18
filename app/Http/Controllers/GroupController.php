<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\GroupTask;
use App\Group;
use App\User;

class GroupController extends Controller
{
    function index()
    {
        $current_user = Auth::user();
        $groups = Group::all();
        $res = array();
        $leader_id = -1;
        foreach ($groups as $group) {
            $group_leader = NULL;
            foreach ($group->users()->get() as $user) {
                if ($user->pivot->role == "Leader") {
                    $group_leader = $user->name;
                    $leader_id = $user->id;
                    break;
                }
            }
            $group_info = array();
            $group_info = $group->only(['id', 'name', 'description', 
                                        'founding_date', 'expiration_date']);
            $group_info["permission"] = FALSE;
            $group_info["leader"] = $group_leader;
            $group_info["performed_works"] = $group->works()->count();
            $group_info["members"] = $group->users()->count();

            if ($leader_id == $current_user->id || $group_leader == NULL) {
                $group_info["permission"] = TRUE;
            }

            array_push($res, $group_info);
        }

        return response()->json($res);
    }

    function create(Request $request)
    {
        try {
            $group = new Group();
            $group->name = $request->name;
            $group->description = $request->description;
            $group->founding_date = $request->founding_date;
            $group->expiration_date = $request->expiration_date;
            if ($group->save()) {
                $leader = User::find($request->leader_id);
                $leader->groups()->attach(
                    [$group->id],
                    ['role' => 'Leader']
                );
                $group_task = new GroupTask();
                $group_task->name = "leader";
                $group_task->group_id = $group->id;
                $group_task->save();

                $leader->groupTasks()->attach([$group_task->id]);
                $res = array();
                $res["id"] = $group->id;
                $res["name"] = $group->name;
                $res["description"] = $group->description;
                $res["leader"] = $leader->name;
                return response()->json($res);
            } else {
                return response(null, Response::HTTP_BAD_REQUEST);
            }
        } catch (Exception $e) {
            return response($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    function update(Request $request)
    {
        try {
            $res = array();

            if ($request->name) {
                $group = Group::find($request->group_id);
                $group->name = $request->name;
                $group->save();
                $res["name"] = $request->name;
            }

            if ($request->description) {
                $group = Group::find($request->group_id);
                $group->description = $request->description;
                $group->save();
                $res["description"] = $request->description;
            }

            if ($request->founding_date) {
                $group = Group::find($request->group_id);
                $group->description = $request->description;
                $group->save();
                $res["founding_date"] = $request->founding_date;
            }

            if ($request->expiration_date) {
                $group = Group::find($request->group_id);
                $group->description = $request->description;
                $group->save();
                $res["expiration_date"] = $request->expiration_date;
            }

            if ($request->leader_id) {
                $group = Group::find($request->group_id);
                // Detach old leader
                foreach ($group->users()->get() as $user) {
                    if ($user->pivot->role == "Leader") {
                        $group_task_user_ids = DB::table('group_task_user')
                                                ->where('user_id', $user->id)
                                                ->pluck('group_task_id');
                        $group_task_ids = GroupTask::whereIn('id', $group_task_user_ids)
                                                    ->where('group_id', $group->id)
                                                    ->pluck('id');
                        GroupTask::destroy($group_task_ids);
                        $user->groups()->detach($group->id);
                    }
                }
                // Attach new leader
                $leader = User::find($request->leader_id);
                $leader->groups()->attach(
                    $group,
                    ['role' => 'Leader']
                );

                $group_task = new GroupTask();
                $group_task->name = "leader";
                $group_task->group_id = $group->id;
                $group_task->save();

                $leader->groupTasks()->attach($group_task);
                $res["leader"] = $leader->name;
            }

            return response()->json($res);
        } catch (Exception $e) {
            return response($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    function addUserToGroup(Request $request)
    {
        try {
            $data = $request->only('group_id', 'user_ids', 'role', 'task');
    
            $group = Group::find($data["group_id"]);

            $res = array();
            foreach($data["user_ids"] as $user_id) {
                // Check if corresponding user was in group or not
                $user = $group->users()->find($user_id);
                if (!$user) {
                    $user_info = array();
                    $user = User::find($user_id);
                    $group_task = new GroupTask();

                    $group_task->name = $data["task"];
                    $group_task->group_id = $group->id;
                    $group_task->save();

                    $user->groupTasks()->attach($group_task);
                    $user->groups()->attach(
                        $group,
                        ['role' => $data["role"]]
                    );
                    
                    $user_info = array(
                        "id" => $user->id,
                        "name" => $user->name,
                        "role" => $data["role"],
                        "task" => $data["task"]
                    );
                    array_push($res, $user_info);
                }
            }                
                
            return response()->json($res);
        } catch (Exception $e) {
            return response($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    function updateUserTaskInGroup(Request $request)
    {
        try {
            $res = array();
            $user = User::find($request->user_id);
            $group = Group::find($request->group_id);

            $group_task_id = DB::table('group_task_user')
                ->select('group_task_id')
                ->where('user_id', $request->user_id)
                ->first();

            DB::table('group_tasks')
                ->where('id', $group_task_id->group_task_id)
                ->update(['name' => $request->task]);

            $res["user_name"] = $user->name;
            $res["task"] = $request->task;

            return response()->json($res);
        } catch (Exception $e) {
            return response($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    function deleteUserInGroup(Request $request)
    {
        try {
            $group = Group::find($request->group_id);
            $user = User::find($request->user_id);
            $group_task_user_ids = DB::table('group_task_user')
                                                ->where('user_id', $user->id)
                                                ->pluck('group_task_id');
            $group_task_ids = GroupTask::whereIn('id', $group_task_user_ids)
                                        ->where('group_id', $group->id)
                                        ->pluck('id');
            GroupTask::destroy($group_task_ids);
            $user->groups()->detach($group->id);

            return response()->json(array("isOk" => true));
        } catch (Exception $e) {
            return response($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    function getUsersInfo(Request $request)
    {
        try {
            $group = Group::find($request->group_id);
            $res = array();

            foreach ($group->users()->get() as $user) {
                $user_info = array();
                $user_info["id"] = $user->id;
                $user_info["name"] = $user->name;
                $user_info["role"] = $user->pivot->role;
                $group_task_id = DB::table('group_task_user')
                    ->where('user_id', $user->id)
                    ->pluck('group_task_id');

                $group_task = $group->groupTasks()->whereIn("id", $group_task_id)->first();

                if ($group_task) {
                    $user_info["task"] = $group_task->name;
                } else {
                    $user_info["task"] = null;
                }
                array_push($res, $user_info);
            }

            return response()->json($res);
        } catch (Exception $e) {
            return response($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
    
    function delete(Request $request)
    {
        // Delete group and constraint
        try {
            $group_id = $request->only('group_id')['group_id'];
            $group = DB::table('groups')->where('id', $group_id)->get();
            if ($group && count($group) > 0) {

                $id = Auth::user()->id;
                $permission = DB::table('group_user')
                    ->where('id', $id)
                    ->where('group_id', $group_id)
                    ->where('role', 'Leader')
                    ->select('group_id')
                    ->get();

                if ($permission && count($permission) > 0) {
                    //has value
                    DB::table('groups')->where('id', $group_id)->delete();
                    return response()->json([
                        'sucessful' => true,
                        'deleted' => $group_id,
                    ]);
                } else return response()->json([
                    'sucessful' => false,
                    'error' => 'permission denied',
                ]);
            } else {
                return response()->json([
                    'sucessful' => false,
                    'error' => 'group_id not found',
                ]);
            }
        } catch (Exception $e) {
            return response($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}
