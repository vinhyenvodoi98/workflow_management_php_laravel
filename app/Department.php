<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    /**
     * Users that belong to department
     */
    public function users()
    {
        return $this->belongsToMany('App\User')->withPivot('role')->withTimestamps();
    }

    /**
     * Get targets of department
     */
    public function targets()
    {
        return $this->hasMany('App\Target');
    }

    /**
     * Get tasks of department
     */
    public function departmentTasks()
    {
        return $this->hasMany('App\DepartmentTask');
    }
}
