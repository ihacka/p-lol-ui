const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
})

const cssloaders = [
    {
        loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        options: {
            modules: true
        }
    }];

const env_client = {
    "IS_BROWSER": JSON.stringify(true),
    "ROOT_DIR": JSON.stringify(__dirname)
}

const resolve_options = {
    extensions: ['.js'],
    alias: {
        'components': path.join(__dirname,'src','components'),
        'containers': path.join(__dirname,'src','containers'),
        'consts': path.join(__dirname,'src','consts'),
        'managers': path.join(__dirname,'src','managers'),
        'common_actions': path.join(__dirname,'src','common_actions')
    }
};

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  resolve: resolve_options,
  devtool: 'source-map',
  module: {
      loaders: [
          { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
          { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
          { test: /\.css$/,
              loaders: [
                  'style-loader?sourceMap',
                  'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
              ]},
          {
              test: /\.(jpg|png|gif|svg|pdf|ico)$/,
              use: [
                  {
                      loader: 'file-loader',
                      options: {
                          name: '[path][name]-[hash:8].[ext]'
                      },
                  },
              ]
          },
      ]
  },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin({ filename: 'bundle.css', allChunks: true}),
        new webpack.DefinePlugin(env_client),
        HtmlWebpackPluginConfig]
}
