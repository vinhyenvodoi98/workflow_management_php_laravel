<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Department;
use App\User;


class DepartmentController extends Controller
{
    function create(Request $request)
    {
        try {
            $department = new Department();
            $department->name = $request->name;
            $department->description = $request->description;
            $department->index = $request->index;

            if ($department->save()) {
                $leader = User::find($request->leader_id);
                $leader->departments()->attach(
                    $department,
                    ['role' => 'Leader']
                );
                $res = array();
                $res["id"] = $department->id;
                $res["name"] = $department->name;
                $res["description"] = $department->description;
                $res["leader"] = $leader->name;
                return response()->json($res);
            } else {
                return response(null, Response::HTTP_BAD_REQUEST);
            }
        } catch (Exception $e) {
            return response($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}
