<?php

use Illuminate\Database\Seeder;

class GroupUserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // factory(App\GroupUser::class, 20)->create();
        $groups = App\Group::all();
        App\User::all()->each(function ($user) use ($groups) {
            $faker = Faker\Factory::create();

            $user->groups()->attach(
                $groups->random(rand(1, 2))->pluck('id')->toArray(),
                ['role' => $faker->optional(0.1, 'Staff')->randomElement(array('Leader', 'Vice leader'))]
            );
        });
    }
}
