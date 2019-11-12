<?php

use Illuminate\Database\Seeder;

class CommentDocumentTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // factory(App\CommentDocument::class, 400)->create();
        $documents = App\Document::all();
        App\Comment::all()->each(function ($comment) use ($documents) {
            $comment->documents()->attach(
                $documents->random(rand(1, 3))->pluck('id')->toArray()
            );
        });
    }
}
