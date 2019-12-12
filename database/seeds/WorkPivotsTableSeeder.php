<?php

use Illuminate\Database\Seeder;

class WorkPivotsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // factory(App\WorkPivot::class, 45)->create();
        $children = App\Work::limit(45)->pluck('id');

        $parents = array();
        foreach ($children as $child) {
            if (!in_array($child, $parents)) {
                do
                    $parent = mt_rand(1, 50);
                while ($parent == $child);
                array_push($parents, $parent);

                DB::table('work_pivots')->insert(
                    [
                        'parent_id' => $parent,
                        'work_id' => $child,
                    ]
                );
            };
        }
    }
}
