<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;

class UserController extends Controller
{
    function index() {
        $users = User::all();
        return response()->json($users);
    }

    function currentUserGroups() {
        $user = Auth::user();
        $groups = $user->groups()->get();
        $res = array();
        foreach($groups as $group) {
            $group_info = array();
            $group_info["id"] = $group->id;
            $group_info["name"] = $group->name;
            array_push($res, $group_info);
        }
        return response()->json($res);
    }
}
