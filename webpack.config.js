const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const ExtractPlugin = require('extract-text-webpack-plugin')
// const VueLoaderPlugin = require('vue-loader')

const isDev = process.env.NODE_ENV === 'development'; //启动脚本的变量都放在process.env中

const config = {
    target: 'web',
    entry:path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.[hash:8].js',
        path: path.join(__dirname, 'dist')
    },
    module:{
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            /* {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }, */
            
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use:[
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name:'[name].[ext]'
                        }
                    }
                ]
            },{
                test:/\.jsx/,
                loader:'babel-loader'
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HTMLPlugin(),

    ]
}

if(isDev){
    config.module.rules.push(
        {
            test: /\.styl/,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                    }
                },
                'stylus-loader'
            ]
        },
    );
    config.devtool = '#cheap-module-eval-source-map'
    config.devServer = {
        port: 8888,
        host: '0.0.0.0',
        overlay: {
            errors:true,
        },//打印错误在浏览器
        open:true,// 自动打开
        /* historyFallback:{
            //将不同的入口配置到这index.js
        }, */
        hot:true//热加载，使用要加上底下的插件
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),//热加载
        new webpack.NoEmitOnErrorsPlugin()
    )
}else{
    config.entry = {
        app: path.join(__dirname, 'src/index.js'),
        vendor:['vue']
    }
    config.output.filename = '[name].[chunkhash:8].js'
    config.module.rules.push(
        {
            test: /\.styl/,
            use: ExtractPlugin.extract({
                fallback:'style-loader',
                use:[
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
        },
    )
    config.plugins.push(
        new ExtractPlugin('styles.[contentHash:8].css'),//单独打包css
        new webpack.optimize.CommonsChunkPlugin({//单独打包静态js，如vue.js
            name:'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'runtime'
        })//研究一下！
    )
}

module.exports = config

//chunkHash;
//Hash整个应用一个hash