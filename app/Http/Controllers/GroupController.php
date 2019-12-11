<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use App\GroupTask;
use App\Group;
use App\User;

class GroupController extends Controller
{
    function index() {
        $groups = Group::all();
        $res = array();
        foreach($groups as $group){
            $group_info = array();
            $group_leader = NULL;
            foreach($group->users()->get() as $user) {
                if ($user->pivot->role == "Leader") {
                    $group_leader = $user->name;
                    break;
                }
            }

            $group_info["id"] = $group->id;
            $group_info["name"] = $group->name;
            $group_info["description"] = $group->description;
            $group_info["leader"] = $group_leader;
            $group_info["performed_works"] = $group->works()->count();
            $group_info["members"] = $group->users()->count();
            $group_info["founding_date"] = $group->founding_date;
            $group_info["expiration_date"] = $group->expiration_date;
    
            array_push($res, $group_info);
        }
        
        return response()->json($res);
    }

    function create(Request $request) {
        try {
            $group = new Group();
            $group->name = $request->name;
            $group->description = $request->description;
            $group->founding_date = $request->founding_date;
            $group->expiration_date = $request->expiration_date;
            if ($group->save()) {
                $leader = User::find($request->leader_id);
                $leader->groups()->attach(
                    $group,
                    ['role' => 'Leader']
                );
                $res = array();
                $res["id"] = $group->id;
                $res["name"] = $group->name;
                $res["description"] = $group->description;
                $res["leader"] = $leader->name;

                return response()->json($res);
            } else {
                return response(null, Response::HTTP_BAD_REQUEST);
            }
        } catch ( Exception $e ) {
            return response($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    function update(Request $request) {
        try {
            $res = array();

            if($request->name) {
                $group = Group::find($request->group_id);
                $group->name = $request->name;
                $group->save();   
                $res["name"] = $request->name;
            }

            if($request->description) {
                $group = Group::find($request->group_id);
                $group->description = $request->description;
                $group->save();   
                $res["description"] = $request->description;
            }
            if($request->leader_id) {
                $group = Group::find($request->group_id);
                // Detach old leader
                foreach($group->users()->get() as $user) {
                    if ($user->pivot->role == "Leader") {
                        $user->groups()->detach($group->id);
                    }
                }
                // Attach new leader
                $leader = User::find($request->leader_id);
                $leader->groups()->attach(
                    $group,
                    ['role' => 'Leader']
                );
                $res["leader"] = $leader->name;
            }

            if($request->user_id && $request->role && $request->task) {
                $group = Group::find($request->group_id);
                $group_task = new GroupTask();
                $group_task->name = $request->task;
                $group_task->group_id = $group->id;
                if($group_task->save()) {
                    $user = User::find($request->user_id);
                    $user->groupTasks()->attach($group_task);
                    $user->groups()->attach(
                        $group,
                        ['role' => $request->role]
                    );
                    $res['user'] = array(
                        "id" => $user->id,
                        "name" => $user->name,
                        "role" => $request->role,
                        "task" => $request->task
                    );     
                }
            }

            return response()->json($res);

        } catch ( Exception $e ) {
            return response($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    function getUsersInfo(Request $request) {
        try {
            $group = Group::find($request->group_id);
            $res = array();

            foreach($group->users()->get() as $user) {
                $user_info = array();
                $user_info["id"] = $user->id;
                $user_info["name"] = $user->name;
                $user_info["role"] = $user->pivot->role;
                $group_task_id = DB::table('group_task_user')
                                        ->select('group_task_id')
                                        ->where('user_id', $user->id)
                                        ->first();
                $task_name = $group->groupTasks()->find($group_task_id->group_task_id);
                if($task_name) {
                    $user_info["task"] = $task_name->name;
                } else {
                    $user_info["task"] = null;
                }
                array_push($res, $user_info);
            }

            return response()->json($res);
        } catch ( Exception $e ) {
            return response($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
        
    }
}
