import Vue from 'vue'

new Vue({
  el:'#root',
  template:"<div><p :class='classNames' v-html='html'></p><p>{{getJoinArr(arr)}}</p><p :style='[style,style2]'>123</p></div>",
  data:{
    isActive:false,
    arr:[1,2,3],
    html:'<span>123</span>',
    style:{
      color:'red'
    },
    style2:{
      color:'black'
    }
  },
  computed:{
    classNames(){
      return 'xxx'
    }
  },
  methods:{
    handleClick(){

    },
    getJoinArr(arr){
      return arr.join(' ');
    }
  }
})
