<?php

use Illuminate\Database\Seeder;

class TargetPivotsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // factory(App\TargetPivot::class, 100)->create();
        $children = App\Target::limit(45)->pluck('id');

        $parents = array();
        foreach ($children as $child) {
            if (!in_array($child, $parents)) {
                do
                    $parent = mt_rand(1, 300);
                while ($parent == $child);
                array_push($parents, $parent);

                DB::table('target_pivots')->insert(
                    [
                        'parent_id' => $parent,
                        'target_id' => $child,
                    ]
                );
            };
        }
    }
}
