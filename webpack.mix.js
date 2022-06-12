const mix = require('laravel-mix');
require('laravel-mix-tailwind');

mix.js('resources/js/app.js', 'public/js');
mix.sass('resources/scss/app.scss', 'public/css');
mix.tailwind();