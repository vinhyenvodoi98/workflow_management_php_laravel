<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\DepartmentTask;
use Faker\Generator as Faker;

$factory->define(DepartmentTask::class, function (Faker $faker) {
    return [
        'name' => $faker->sentence,
        // 'department_id' => mt_rand(1, 20),
    ];
});
