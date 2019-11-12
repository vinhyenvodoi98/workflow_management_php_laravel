<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDepartmentPivotsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('department_pivots', function (Blueprint $table) {
            $table->timestamps();

            $table->unsignedBigInteger('department_id');
            $table->unsignedBigInteger('parent_id');
            $table->primary(['department_id', 'parent_id']);
            $table->foreign('department_id')->references('id')->on('departments')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('parent_id')->references('id')->on('departments')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('department_pivots');
    }
}
