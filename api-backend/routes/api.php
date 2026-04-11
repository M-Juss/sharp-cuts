<?php

use App\Http\Controllers\ClientController;
use App\Http\Controllers\LoginController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware("guest")->group(function () {
    Route::apiResource('client', ClientController::class)->only('store');
    Route::post('login', [LoginController::class, 'store']);
});


Route::middleware("auth:sanctum")->group(function () {
    Route::apiResource('client', ClientController::class)->only(['update', 'destroy']);
    
     Route::get('client/profile', [ClientController::class, 'show']);
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');