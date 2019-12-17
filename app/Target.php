<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Target extends Model
{
    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = ['id', 'parent_id'];

    /**
     * Get the user that sets the target
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    /**
     * Get the department that sets the target
     */
    public function department()
    {
        return $this->belongsTo('App\Department');
    }

    /**
     * Get works that belong to target
     */
    public function works()
    {
        return $this->hasMany('App\Work');
    }
}
