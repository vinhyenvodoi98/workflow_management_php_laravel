<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DepartmentTask extends Model
{
    /**
     * Users that belong to department task
     */
    public function users()
    {
        return $this->belongsToMany('App\User')->withTimestamps();
    }

    /**
     * Get the department that owns the task
     */
    public function department()
    {
        return $this->belongsTo('App\Department');
    }
}
