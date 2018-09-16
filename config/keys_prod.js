module.exports = {
  mongoURI: process.env.MONGO_URI,
  secretOrKey: process.env.SECRET_OR_KEY,
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        "style-loader", // creates style nodes from JS strings
        "css-loader", // translates CSS into CommonJS
        "sass-loader" // compiles Sass to CSS, using Node Sass by default
      ]
    }]
  }
};
