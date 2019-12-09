<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
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
            $res["name"] = $group->name;
            $res["description"] = $group->description;
            $res["leader"] = $leader->name;

            return response()->json($res);
        } else {
            return response(null, Response::HTTP_BAD_REQUEST);
        }
    }
}
