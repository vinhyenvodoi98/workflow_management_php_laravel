<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentDocumentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comment_document', function (Blueprint $table) {
            $table->timestamps();

            $table->unsignedBigInteger('comment_id')->nullable(false);
            $table->unsignedBigInteger('document_id')->nullable(false);
            $table->primary(['comment_id', 'document_id']);
            $table->foreign('comment_id')->references('id')->on('comments')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('document_id')->references('id')->on('documents')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comment_document');
    }
}
