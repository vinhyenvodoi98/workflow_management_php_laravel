<?php

use Illuminate\Database\Seeder;

class GroupTaskUserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // factory(App\GroupTaskUser::class, 40)->create();
        $groupTasks = App\GroupTask::all();
        App\User::all()->each(function ($user) use ($groupTasks) {
            $user->groupTasks()->attach(
                $groupTasks->random(rand(1, 2))->pluck('id')->toArray()
            );
        });
    }
}
