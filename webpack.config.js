const path = require(`path`);

module.exports = {
  mode: `development`,
  entry: `./src/main.js`,
  output: {
    path: path.join(__dirname, `public/js`),
    filename: `bundle.js`,
    publicPath: `/js/`,
  },
  devtool: `source-map`,
  devServer: {
    contentBase: path.join(__dirname, `public`)
  },
};
