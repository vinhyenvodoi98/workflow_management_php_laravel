<?php

use Illuminate\Database\Seeder;

class TargetsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Target::class, 300)->create();
    }
}
