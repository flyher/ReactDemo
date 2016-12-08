var webpack = require('webpack');
module.exports = {
  entry: {
    index: [
      './components/Index.jsx'
    ]
  },
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    publicPath: 'http://localhost:8889/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'jsx-loader?insertPragma=React.DOM&harmony'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader'
      }
    ]
  },
  externals: {
    react: 'React'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }, {

      }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', 'less']
  }
}
