<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTargetPivotsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('target_pivots', function (Blueprint $table) {
            $table->timestamps();

            $table->unsignedBigInteger('target_id');
            $table->unsignedBigInteger('parent_id');
            $table->primary(['target_id', 'parent_id']);
            $table->foreign('target_id')->references('id')->on('targets')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('parent_id')->references('id')->on('targets')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('target_pivots');
    }
}
