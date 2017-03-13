<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>My App</title>
    <link rel="stylesheet" href="/css/app.css">


</head>
<body>
@yield('main')
<script src="/js/app.js"></script>
</body>
</html>
