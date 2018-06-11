import Router from "vue-router";

import routes from "./routes";

// const router = new Router({
//   router
// });

export default ()=>{
  return new Router({
    routes,
    mode:'history'//history 地址后面没有hash值‘#’
  })
}
