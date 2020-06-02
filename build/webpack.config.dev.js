const path = require('path');
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


const HOST = 'localhost';
const PORT = 8081;
console.log(baseConfig)
module.exports = merge(baseConfig, {
  mode: 'development',
  entry: path.resolve(__dirname, '../doc/index.js'),
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    contentBase: 'dist',
    compress: true,
    host: HOST,
    port: PORT,
    open: true,
    overlay: { warnings: false, errors: true },
    publicPath: '/',
    quiet: true
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }, {
        test: /\.styl(us)?$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'stylus-loader'
        ]
      }, {
        test: /\.scss$/,
        use: [
          { loader: 'vue-style-loader' },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
          {
            loader: 'sass-resources-loader',
            options: {
              sourceMap: true,
              resources: [path.resolve(__dirname, '../packages/theme/reset.scss'),]//???path.resolve?????
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './doc/index.html',
      filename: 'index.html',
      favicon: './doc/favicon.ico',
      inject: true
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          `
          You application is running here http://${HOST}:${PORT}
          Buildï¼šnpm run prod
          Publish npm:npm publish
          `
        ],
        notes: ['Some additionnal notes to be displayed unpon successful compilation']
      },
      onError: function (severity, errors) {

      },
      clearConsole: true,
      additionalFormatters: [],
      additionalTransformers: []
    })
  ]
})