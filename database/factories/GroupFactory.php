<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Group;
use Faker\Generator as Faker;

$factory->define(Group::class, function (Faker $faker) {
    return [
        'name' => $faker->sentence,
        'description' => $faker->text,
        'founding_date' => $faker->dateTimeBetween('-3 months', 'now'),
        'expiration_date' => $faker->dateTimeBetween('now', '+3 months'),
    ];
});
