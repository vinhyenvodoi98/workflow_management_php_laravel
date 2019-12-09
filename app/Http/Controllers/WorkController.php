<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use App\Work;
use App\Group;

class WorkController extends Controller
{
    function index(Request $request) {
        $user = Auth::user();
        $groups = $user->groups()->where('id', $request->group_id)->get();
        $res = array();
        foreach($groups as $group) {
            foreach($group->works()->get() as $work){
                $work_info = array();
                $work_info["id"] = $work->id;
                $work_info["name"] = $work->name;
                $work_info["description"] = $work->description;
                $work_info["status"] = $work->status;
                $work_info["priority"] = $work->priority;
                $work_info["score"] = $work->score;
                $work_info["process"] = $work->process;
                $work_info["start_date"] = $work->start_date;
                $work_info["due_date"] = $work->due_date;

                $current_user  = $work->users()->find($user->id);
                if ($current_user) {
                    $current_user_role = $current_user->pivot->role;
                } else {
                    $current_user_role = null;
                }
                $work_info["current_user_role"] = $current_user_role;

                array_push($res, $work_info);
            }
        }
        return response()->json($res);
    }
}
