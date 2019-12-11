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
    
    // User APIs
    Route::get('users', 'UserController@index');
    Route::get('users/currentUser/groups', 'UserController@currentUserGroups');

    // Group APIs
    Route::get('groups', 'GroupController@index');
    Route::post('groups', 'GroupController@create');
    Route::post('groups/group/update', 'GroupController@update');
    Route::post('groups/group/user/create', 'GroupController@addUserToGroup');
    Route::post('groups/group/user/update', 'GroupController@updateUserTaskInGroup');
    Route::post('groups/group/user/delete', 'GroupController@deleteUserInGroup');
    Route::get('groups/{group_id}/users', 'GroupController@getUsersInfo');

    // Work APIs
    Route::get('user/groups/{group_id}/works', 'WorkController@index');
    Route::post('user/groups/{group_id}/works', 'WorkController@create');

});

Route::middleware('jwt.refresh')->get('/token/refresh', 'AuthController@refresh');
