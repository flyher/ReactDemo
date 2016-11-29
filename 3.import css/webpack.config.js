var webpack = require('webpack');
module.exports = {
  // entry: './components/index.jsx',
  entry: {
    index: [
      './components/index.jsx',
      './lib/bootstrap/bootstrap-theme.min.css',
      './lib/bootstrap/bootstrap.min.css',
      './lib/bootstrap/bootstrap.min.js',
      './css/box.css'
    ] //将css文件打包进去
  },
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
      // 添加css loader
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      // {
      //   test: /\.(png|jpg|gif)$/,
      //   loader: 'url-loader?limit=8192'
      // }, // <=8k的图片使用base64内联, 其他的继续用图片
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader'
      }// 图片独立(兼容<IE8的browser)
      // {
      //   test: './lib/bootstarp/jquery.min.js', 
      //   loader: 'imports?jQuery=jquery'
      // }
    ]
  },
  externals: {
    'react': 'React',
    'jquery': 'window.$'
  },
  plugins: [

  ],
  resolve: {
    extensions: ['', '.js', '.jsx', 'css']
  }
}
