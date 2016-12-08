var webpack = require('webpack');
module.exports = {
  entry: {
    index: [
      './components/index.jsx',
      './lib/bootstrap/bootstrap-theme.min.css',
      './lib/bootstrap/bootstrap.min.css',
      './lib/bootstrap/bootstrap.min.js',
      './css/movie.css'
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
      // {
      //   test:/\.scss$/,
      //   loader:'style!css!sass'
      // },
      // {
      //   test: /\.(png|jpg|gif)$/,
      //   loader: 'url-loader?limit=8192'
      // }, // <=8k的图片使用base64内联, 其他的继续用图片
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader'
      }, // 图片独立(兼容<IE8的browser)
      // {
      //   test: /vendor\/.+\.(jsx|js)$/,
      //   loader: 'imports?jQuery=jquery,$=jquery,this=>window'
      // }
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
    extensions: ['', '.js', '.jsx']
  }
}
