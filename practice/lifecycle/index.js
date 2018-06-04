import Vue from 'vue';

const app = new Vue({
  el:'#root',
  template:'<div>{{text}}</div>',
  data:{
    text:0
  },
  beforeCreate(){
    console.log('---------------beforeCreate---------------', this);
  },
  created(){
    console.log('---------------created---------------', this);
  },
  beforeMount(){
    console.log('---------------beforeMount----------------', this.$el);//替换前的dom
  },
  mounted() {
    console.log('---------------mounted---------------', this.$el);//替换猴的dom
  },
  beforeUpdate(){
    console.log('---------------beforeUpdate----------------', this);
  },
  updated() {
    console.log('---------------updated---------------', this);
  },
  activated(){
      console.log('---------------actived---------------');
  },
  deactivated(){
    console.log('--------------deactived--------------')
  },
  beforeDestroy(){
    console.log('---------------beforeDestroy----------------', this);
  },
  destroyed(){
    console.log('---------------destroyed----------------', this);
  },
/*render(h){
    throw new TypeError('render error')
    console.log('render function invoked');
    return h('div',{},this.text);
  }, */
  renderError(h,err){
    //只关心自己
    return h('div',{},this.text)
  },
  errorCaptured(){
    //会向上冒泡，对自组件都有效，正式可用
  }

});

/* setInterval(()=>{
  app.text = app.text + 1
},1000)
 */

/*  setTimeout(() => {
   app.$destroy();
 }, 2000); */
