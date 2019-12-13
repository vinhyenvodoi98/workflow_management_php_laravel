<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    function index()
    {
        $users = User::all();
        return response()->json($users);
    }

    function currentUserGroups()
    {
        $user = Auth::user();
        $groups = $user->groups()->get();
        $res = array();
        foreach ($groups as $group) {
            $group_info = array();
            $group_info["id"] = $group->id;
            $group_info["name"] = $group->name;
            array_push($res, $group_info);
        }
        return response()->json($res);
    }

    function indexLowerTier()
    {
        $rank = array(
            "Chairman" => 1,
            "CEO" => 2,
            "CTO" => 3,
            "COO" => 4,
            "CFO" => 5,
            "Director" => 6,
            "Manager" => 7,
            "Staff" => 8,
        );
        $user = Auth::user();
        $position = DB::table('users')
            ->where('id', $user["id"])
            ->first();
        $user_rank =  $rank[$position->position];
        $lower = array();
        for ($i = $user_rank; $i < 9; $i++) {
            $role = array_search($i, $rank);
            // print($role);
            array_push($lower, $role);
        }
        // print_r($lower);
        // print('\n');
        $res = DB::table('users')
            ->whereIn('position', $lower)
            ->get();
        return response()->json($res);
    }
}
