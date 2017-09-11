var webpack = require('webpack');
var config = require('config');

module.exports = {
  entry: "/simplr/app/index.js";
  output: "index_bundle.js";

  script: "start"

  test [
        babel;
        babel-presets: [env,react];
        style
      ]
}
