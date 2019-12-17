<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Target;
use App\User;

class KPIController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        $targets = $user->targets()->get();

        $res = array();

        foreach ($targets as $target) {
            $target_info = $target;

            $child_target_ids = DB::table('target_pivots')
                ->select('target_id')
                ->where('parent_id', $target->id)
                ->get()
                ->toArray();

            // dd(array_column($child_target_ids, 'target_id'));

            $child_targets = DB::table('targets')
                ->whereIn('id', array_column($child_target_ids, 'target_id'))
                ->get();

            $target_info['children'] = $this->getChildren($child_targets);

            $res[] = $target_info;
        }
        return response()->json($res);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $target = Target::create($request->all());
            $target->user_id = Auth::user()->id;
            $target->save();

            if ($request->parent_id) {
                DB::table('target_pivots')->insert(
                    [
                        'parent_id' => $request->parent_id,
                        'target_id' => $target->id,
                    ]
                );
            }

            return response()->json($target, Response::HTTP_CREATED);
        } catch (Exception $e) {
            return response($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        $target = Auth::user()->targets()
            ->get()
            ->where('id', $id)
            ->first();
        if ($target) {
            $child_target_ids = DB::table('target_pivots')
                ->select('target_id')
                ->where('parent_id', $target['id'])
                ->get()
                ->toArray();

            $child_targets = DB::table('targets')
                ->whereIn('id', array_column($child_target_ids, 'target_id'))
                ->get();

            $target['children'] = $this->getChildren($child_targets);

            return response()->json($target);
        }

        return response()->json($target, Response::HTTP_NOT_FOUND);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $target = Auth::user()->targets()
            ->get()
            ->where('id', $id)
            ->first();
        if ($target) {
            $target->update($request->all());
            $target->save();

            if ($request->parent_id) {
                try {
                    DB::table('target_pivots')->update(
                        [
                            'parent_id' => $request->parent_id,
                        ]
                    );
                } catch (Exception $e) {
                    return response($e->getMessage(), Response::HTTP_BAD_REQUEST);
                }
            }

            return response()->json($target);
        }

        return response()->json($target, Response::HTTP_NOT_FOUND);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $target = Target::findOrFail($id);
        $target->delete();

        return response('Target deleted.', 200);
    }

    function getChildren($targets)
    {
        $user = Auth::user();

        $res = array();

        foreach ($targets as $target) {
            $target_info = (array) $target;

            $child_target_ids = DB::table('target_pivots')
                ->select('target_id')
                ->where('parent_id', $target->id)
                ->get()
                ->toArray();

            $child_targets = DB::table('targets')
                ->whereIn('id', array_column($child_target_ids, 'target_id'))
                ->get();

            $target_info['children'] = $this->getChildren($child_targets);
            if (!empty($child_targets)) {
                $target_info['children'] = $this->getChildren($child_targets);
            } else {
                $target_info['children'] = null;
            }

            $res[] = $target_info;
        }
        if (!empty($res))
            return $res;
        return null;
    }
}
