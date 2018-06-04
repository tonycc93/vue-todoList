const path = require('path')
const webpack = require('webpack')
const createVueLoaderOptions = require('./vue.loader.config.js')
// const VueLoaderPlugin = require('vue-loader')

const isDev = process.env.NODE_ENV === 'development'; //启动脚本的变量都放在process.env中

const config = {
    target: 'web',
    entry: path.join(__dirname, '../client/index.js'),
    output: {
        filename: 'bundle.[hash:8].js',
        path: path.join(__dirname, '../dist')
    },
    module: {
        rules: [
            /* {
                test: /\.(vue|js|jsx)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
                enforce:'pre'//预处理 post后处理
            }, */
            {
                test: /\.vue$/,
                use:[{
                 loader:'vue-loader',
                 options: createVueLoaderOptions(isDev)
                }]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: 'resources/[path][name].[hash:8].[ext]'
                    }
                }]
            }, {
                test: /\.jsx/,
                loader: 'babel-loader'
            }
        ]
    },
}

module.exports = config

//chunkHash;
//Hash整个应用一个hash
