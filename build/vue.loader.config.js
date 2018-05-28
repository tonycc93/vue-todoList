// const docsloader = require。resolve('./doc-loader')

module.exports = (isDev) =>{
    return {
        preserverWhitepace:true,//处理template中的空格
        extractCSS: !isDev,//倒出.vue文件中的css
        cssModules: {
            localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
            camelCase: true,//将css类名由横杆连接转为驼峰式命名以方便js代码调用，用法：在style标签上加module属性，:class="$style.mainHeader"
        },

        // hotReload: false 根据环境变量生产
        // loaders:{//自定义模块处理loader
        //     'docs': docsloader
        // },
        // preLoader:{
        // },
        // postLoader:{
        // }
    }
}