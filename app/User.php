<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    /**
     * Static function to check for valid username and password
     *
     * return true if valid
     */
    public static function checkValidEmail($email)
    {
        return DB::table('users')->where('email', $email)->exists();
    }

    /**
     * Get activities created by user
     */
    public function activities()
    {
        return $this->hasMany('App\Activity');
    }

    /**
     * Get comments written by user
     */
    public function comments()
    {
        return $this->hasMany('App\Comment');
    }

    /**
     * Get documments uploaded by user
     */
    public function documents()
    {
        return $this->hasMany('App\Document');
    }

    /**
     * Get targets set by user
     */
    public function targets()
    {
        return $this->hasMany('App\Target');
    }

    /**
     * Departments that belong to user
     */
    public function departments()
    {
        return $this->belongsToMany('App\Department')->withPivot('role')->withTimestamps();
    }

    /**
     * Department tasks that belong to user
     */
    public function departmentTasks()
    {
        return $this->belongsToMany('App\DepartmentTask')->withTimestamps();
    }

    /**
     * Groups that belong to user
     */
    public function groups()
    {
        return $this->belongsToMany('App\Group')->withPivot('role')->withTimestamps();
    }

    /**
     * Group tasks that belong to user
     */
    public function groupTasks()
    {
        return $this->belongsToMany('App\GroupTask')->withTimestamps();
    }

    /**
     * Works that belong to user
     */
    public function works()
    {
        return $this->belongsToMany('App\Work')->withPivot('role')->withTimestamps();
    }
}
