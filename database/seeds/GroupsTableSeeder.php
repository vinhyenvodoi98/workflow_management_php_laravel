<?php

use Illuminate\Database\Seeder;

class GroupsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Group::class, 3)->create()->each(function ($group) {
            $group->groupTasks()->saveMany(factory(App\GroupTask::class, 3)->make());
        });
    }
}
