@extends('layouts.master')
@section('main')
<div id="fighters-app">

    @include('OOD.fighters-header')
    <section class="section">
        <div class="container">
            <router-view></router-view>
        </div>
    </section>
</div>

<script src="/js/fighters-app.js"></script>
@endsection
