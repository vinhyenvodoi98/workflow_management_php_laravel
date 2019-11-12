<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Document;
use Faker\Generator as Faker;

$factory->define(Document::class, function (Faker $faker) {
    return [
        'path' => $faker->file('../src', '../tmp'),
        'user_id' => mt_rand(1, 100),
    ];
});
