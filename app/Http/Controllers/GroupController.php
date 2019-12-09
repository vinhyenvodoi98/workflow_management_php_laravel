<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Group;

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
}
