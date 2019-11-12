<?php

use Illuminate\Database\Seeder;

class GroupTasksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\GroupTask::class, 10)->create();
    }
}
