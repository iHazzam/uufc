<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', 'RoutingController@getHome');
//Route::get('/rankings', 'RoutingController@getRankings');
//Route::get('/fighters', 'RoutingController@getFighters');
//Route::get('/fights', 'RoutingController@getFights');

//

Route::get('/api/fighters/{wc}','RoutingController@getWC');
Route::get('/api/fighters/history/{fid}','RoutingController@getFH');
Route::get('/api/division/history/{wc}','RoutingController@getWCH');