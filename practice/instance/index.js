import Vue from 'vue'

const app = Vue({
  template: '<div>{{text}}</div>',
  data: {
    text: 'text'
  },
  watch:{
    text(newText,oldText){
      console.log('${newText},${oldText}')
    }
  }
})

app.$mount('#root')

/*
实例上的属性
app.$data;//可用于修改
app.$props;
app.$el;
app.$options;

app.$options.render = (h) =>{
  return h('div',{},'new render function')
}

app.$root;//vue的实例对象 ===app
app.$children;//子dom
app.$slots;//插槽
app.$scopedSlots;
app.$refs;//模版里的引用,如果在html上返回html对象，如果在组件上返回组件实例
app.$isServer;//服务端渲染时用到 */

/* app.$watch('text',(newText,oldText) =>{
  console.log('${newText}:${oldText}')
});
unWatch()//注销watch方法
*/

/* app.$on('test',(a,b)=>{
  console.log('test')
})//不冒泡

app.$once('test',(a,b)=>{
  console.log('test')
})监听一次

app.$emit('test',1,2) */

/* app.$forceUpate;//强制重新渲染
app.$set(app.obj,'a',i);//将变量声明为reactive
app.$delete;删除reactive变量，防止变量溢出
*/

/* app.$nextTick(()=>{
  //vue的渲染是异步的，此方法用于下一次进行dom更新前的时调用
}) */
