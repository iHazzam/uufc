@extends('layouts.master')
@section('main')
<div id="fights-app">

    @include('OOD.fights-header')
    <section class="section">
        <div class="container">
            <router-view></router-view>
        </div>
    </section>
</div>

<script src="/js/fights-app.js"></script>
@endsection