const mix = require("laravel-mix");
require("laravel-mix-tailwind");
require("mix-html-builder");

mix.js("resources/js/app.js", "public/js");
mix.sass("resources/scss/app.scss", "public/css");
mix.tailwind();
mix.copy("resources/images", "public/images", false);