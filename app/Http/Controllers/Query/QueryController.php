<?php

namespace App\Http\Controllers\Query;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class QueryController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Query Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for query data from database.
    |
    */
    function query_high_priority_work()
    {
        $result = DB::table('works')->where('priority', 'high')->get();
        # var_dump($work);

        return response()->json([
            'sucessful' => true,
            'work' => $result,
        ]);
    }

    function query_work_remind()
    {
        $result = DB::table('user_work')->where('role', 'Accountable')->get();
        # var_dump($work);

        return response()->json([
            'sucessful' => true,
            'work' => $result,
        ]);
    }

    function query_all_user()
    {
        $result = DB::table('users')->select('id', 'name')->get();
        # var_dump($work);

        return response()->json([
            'sucessful' => true,
            'work' => $result,
        ]);
    }
}
