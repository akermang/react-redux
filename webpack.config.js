var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    ['.', 'src', 'app', 'index.js'].join(path.sep)
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    modulesDirectories: ['node_modules']
  },
  output: {
    path: [__dirname, 'build'].join(path.sep),
    filename: 'bundle.js',
    publicPath: ''
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), 
		new webpack.NoErrorsPlugin(),    
    new ExtractTextPlugin('./css/main.css', { allChunks: true }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
            presets: ['react', 'es2015']
        }
      },
      { 
          test: /\.(scss)$/, 
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader') 
      },
      { 
          test: /\.(jpe?g|gif|png|ttf|eot|svg|woff|woff2)[\?]?.*$/, 
          loader: 'url-loader?limit=10000&name=assets/[name].[ext]'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
};