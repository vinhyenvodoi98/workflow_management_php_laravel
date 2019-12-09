<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('signup', 'AuthController@register');
Route::post('login', 'AuthController@login');


Route::group(['middleware' => 'jwt.auth'], function () {
    Route::get('high_prioty_work', 'Query\QueryController@query_high_priority_work');
    Route::get('work_schedule', 'Query\QueryController@query_work_remind');
    Route::get('all_user', 'Query\QueryController@query_all_user');

    // Auth APIs
    Route::get('auth', 'AuthController@user');
    Route::post('logout', 'AuthController@logout');
    
    // Group APIs
    Route::get('groups', 'GroupController@index');
});

Route::middleware('jwt.refresh')->get('/token/refresh', 'AuthController@refresh');
