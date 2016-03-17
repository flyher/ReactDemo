var path = require('path')
var webpack=require('webpack')
module.exports = {
    //devtool:'inline-source-map',
    devtool:false,
    entry: './components/index.jsx',
    output: {
        filename: 'bundle.js',
        publicPath:'http://localhost:8091/mytest'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader:'jsx-loader?insertPragma=React.DOM&harmony'
            }
        ]
    },
    externals: {
        'react':'React'
    },
    resolve: {
        extensions:['','.js','.jsx']
    },
    //output: {
    //    path: path.join(__dirname, 'dist'),
    //    filename: 'bundle.js',
    //    publicPath: '/static/'
    //}

}