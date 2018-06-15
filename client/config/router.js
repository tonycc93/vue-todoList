import Router from "vue-router";

import routes from "./routes";

// const router = new Router({
//   router
// });

export default ()=>{
  return new Router({
    routes,
    mode:'history',//history 地址后面没有hash值‘#’,改善网站seo,会有一个问题刷新路由的时候无法找到解析，需要在webpack做1、操作
    // base:'/base/',//在所有路由前面加上base
    // linkActiveClass:'active-link',两个给<router-link>加样式,完全匹配的路由会有这两个样式，上面这个是有部分重合的路由会有的样式
    // linkExactActiveClass:'exact-active-link',
    scrollBehavior:(to,from,savePosition)=>{
      //第三个存滚动条位置
      if(savePosition){
        return savePosition
      }else{
        return{x:0,y:0}
      }
    },
    fallback:true//对不支持history的浏览器做一些自动兼容做法
    //query指的是参数,里面可以对解析的url中的参数做一些特别的操作
    // parseQuery(query){

    // },
    // stringifyQuery(obj){

    // }
  })
}
