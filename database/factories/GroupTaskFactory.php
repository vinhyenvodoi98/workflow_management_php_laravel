<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\GroupTask;
use Faker\Generator as Faker;

$factory->define(GroupTask::class, function (Faker $faker) {
    return [
        'name' => $faker->sentence,
        // 'group_id' => mt_rand(1, 3),
    ];
});
