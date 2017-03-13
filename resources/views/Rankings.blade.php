@extends('layouts.master')
@section('main')
<div id="app">

    @include('layouts.header.rankings-header')
    <section class="section">
        <div class="container">
            <router-view></router-view>
        </div>
    </section>
</div>

@endsection