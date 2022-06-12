const mix = require("laravel-mix");
require("laravel-mix-tailwind");
require("mix-html-builder");

mix.js("resources/js/app.js", "public/js");
mix.sass("resources/scss/app.scss", "public/css");
mix.tailwind();
mix.copy("resources/images", "public/images", false);
mix.html({
  htmlRoot: "./resources/views/index.html", // Your html root file(s)
  output: "public/views", // The html output folder
  partialRoot: "./resources/views/partials", // default partial path
  layoutRoot: "./resources/views/layouts", // default partial path
  minify: {
    removeComments: true,
  },
});
