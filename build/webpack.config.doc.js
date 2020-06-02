const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(baseConfig,{
  mode: 'production',
  entry: path.resolve(__dirname, '../doc/index.js'),
  output:{
    path:path.resolve(__dirname, '../docs'),
    publicPath:'./',
    library:'panda-doc',
    libraryTarget:'umd',
    umdNamedDefine:true
  },
  externals: { //不被打包到build里面
    'vue':'Vue',
    'vue-router':'VueRouter',
    'highlight.js':'hljs',
  },
  optimization: {
    splitChunks:{
      cacheGroups:{
        commons:{
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
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
    new HtmlWebpackPlugin({
      template: './doc/doc.html',
      filename: 'index.html',
      favicon:'./doc/favicon.ico',
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: './doc/404.html',
      filename: '404.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'panda_doc.min.css'
    })
  ]
})