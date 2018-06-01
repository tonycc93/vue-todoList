const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
// const VueLoaderPlugin = require('vue-loader')

const defaultPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      MODE_ENV: '"development"'
    }
  }),
  new HTMLPlugin({
    template: path.join(__dirname, 'template.html')
  })
]

const devServer = {
  port: 8889,
  host: '0.0.0.0',
  overlay: {
    errors: true,
  }, //打印错误在浏览器
  open: true, // 自动打开
  /* historyFallback:{
      //将不同的入口配置到这index.js
  }, */
  hot: true //热加载，使用要加上底下的插件
};

let config

config = merge(baseConfig, {
  entry:path.join(__dirname, '../practice/index.js'),
  module: {
    rules: [{
      test: /\.styl/,
      use: [
        'vue-style-loader',
        'css-loader',
        /* {
            loader: 'css-loader',
            options:{
                module: true,
                localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
            }
        }, */
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
          }
        },
        'stylus-loader'
      ]
    }, ]
  },
  devtool: '#cheap-module-eval-source-map',
  devServer, //注意一下写法,
  resolve:{
    //import Vue from 'vue'
    alias:{
      'vue':path.join(__dirname,'../node_modules/vue/dist/vue.esm.js')//不同的vue版本
    },
  },
  plugins: defaultPlugins.concat([
    new webpack.HotModuleReplacementPlugin(), //热加载
    new webpack.NoEmitOnErrorsPlugin()
  ])
});


module.exports = config

//chunkHash;
//Hash整个应用一个hash
