import Vue from "vue";

new Vue({
  el:'#root',
  template:'<div></div>',
  data:{
    text:0,
    active:false
  }
})

// v-test==ng-bind
// v-html
// v-show
// v-if
// v-else-if
// v-else
// v-for {item,index} in arr {value,key,index} in obj
// :key={{item}} 用一个独一无二的值 用于区分，提升性能开销 不用index作为key
// v-on @
// v-model = arr 复选框绑定数组 :value   v-model修饰符v-model.number输入结果变成字符串 .trim去除首位空格 .lazy...
// v-pre不解析表达式
// v-cloak直接在引入vue代码时才用得到，在vue代码未加载前隐藏表达式，解决{{}}未加载数据时的体验不好
// v-once只执行一次数据绑定，节省性能开销
