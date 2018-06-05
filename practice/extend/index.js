import Vue from "vue";

const component = {
  props: { //被外部使用时可变的行为
    active: Boolean,
    propOne: String,
    click324: Function
  },
  template: '<div><input type="text" v-model.number="template" prop-one/><span v-show="active" @click="handleChange">324</span></div>',
  // vue的限制；需写成data函数
  // data:{
  //   template:'component'
  // }
  data() {
    return {
      template: 0
    }
  },
  methods: {
    handleChange() {
      this.$emit('click324')
    }
  },
  mounted(){
    console.log('innerComp');
    console.log(this.$parent.$options.name);
    this.$parent.text = 'kukuku' //可以在子组件中通过$parent修改父组件的data
  }
}

const component2 = {
  extends:component,//用法2
  data(){
    return {
      template:1
    }
  }
}

/* const CompVue = Vue.extend(component) 用法1

new CompVue({
  el:'#root',
  propsData:{//props与data不同 只能用propsData做
    propOne: '123'

  },
  data:{
    template:1234
  },
  mounted(){//内外合并，内部的mounted先调用
    console.log('outerComp');

  }
}) */

new Vue({
  //parent:mougeVue,只有在new一个组件的时候可以指定其父，模版里引用不能改父组件
  name:'aVue',
  el:'#root',
  data:{
    text:'ooooo'
  },
  components:{
    Comp: component2
  },
  template:'<div><comp></comp><span>{{text}}</span></div>',
  mounted(){

  }
})
