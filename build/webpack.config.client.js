const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractPlugin = require('extract-text-webpack-plugin')
const baseConfig = require('./webpack.config.base')
// const VueLoaderPlugin = require('vue-loader')

const isDev = process.env.NODE_ENV === 'development'; //启动脚本的变量都放在process.env中

const defaultPlugins = [
    new webpack.DefinePlugin({
        'process.env':{
            MODE_ENV: isDev ? '"development"':'production'
        }
    }),
    new HTMLPlugin({
      template:path.join(__dirname,'template.html')
    })
]

const devServer = {
    port: 8888,
    host: '0.0.0.0',
    overlay: {
        errors: true,
    }, //打印错误在浏览器
    historyApiFallback:{
      index:'/index.html'//打包生成的新路径，默认值为index.html，具体看打包设置的output的publicPath有没有给他加什么头,解决mode：history问题
    },
    open: true, // 自动打开
    /* historyFallback:{
        //将不同的入口配置到这index.js
    }, */
    hot: true //热加载，使用要加上底下的插件
};

let config

if (isDev) {
    config = merge(baseConfig, {
        module:{
            rules:[
                {
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
                },
            ]
        },
        devtool: '#cheap-module-eval-source-map',
        devServer,//注意一下写法
        plugins: defaultPlugins.concat([
            new webpack.HotModuleReplacementPlugin(), //热加载
            new webpack.NoEmitOnErrorsPlugin()
        ])
    });
} else {
    config = merge(baseConfig, {
        entry: {
            app: path.join(__dirname, '../client/index.js'),
            vendor: ['vue']
        },
        output:{
            filename: '[name].[chunkhash:8].js'
        },
        module:{
            rules: [{
                test: /\.styl/,
                use: ExtractPlugin.extract({
                    fallback: 'vue-style-loader',
                    use: [
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                            }
                        },
                        'stylus-loader'
                    ]
                })
            }],
        },
        plugins: defaultPlugins.concat([
            new ExtractPlugin('styles.[contentHash:8].css'), //单独打包css
            new webpack.optimize.CommonsChunkPlugin({ //单独打包静态js，如vue.js
                name: 'vendor'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'runtime'
            })
        ])
    });
}

module.exports = config

//chunkHash;
//Hash整个应用一个hash
