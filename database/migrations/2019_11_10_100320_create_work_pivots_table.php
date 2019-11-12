<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWorkPivotsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('work_pivots', function (Blueprint $table) {
            $table->timestamps();

            $table->unsignedBigInteger('work_id');
            $table->unsignedBigInteger('parent_id');
            $table->primary(['work_id', 'parent_id']);
            $table->foreign('work_id')->references('id')->on('works')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('parent_id')->references('id')->on('works')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('work_pivots');
    }
}
