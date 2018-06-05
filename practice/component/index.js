import Vue from "vue";

const component = {
  props:{//被外部使用时可变的行为
    active: {//prop校验
      // type: Boolean,
      required: true,
      default: true,
      validator(value){
        //校验！
        return typeof active === 'Boolean'
      }
    },
    propOne: String,
    click324: Function
  },
  template:'<div><input type="text" v-model.number="template" prop-one/><span v-show="active" @click="handleChange">324</span></div>',
  // vue的限制；需写成data函数
  // data:{
  //   template:'component'
  // }
  data(){
    return {
      template:0
    }
  },
  methods:{
    handleChange(){
      this.click324()
      //this.$emit('click324')流行方法
    }
  }
 /*  mounted(){
    this.propOne = '这样是布星的，props最好不能改'
  } */
}

//全局方法
// Vue.component('CompOne',component);

new Vue({
  components:{
    CompOne: component
  },
  el:'#root',
  template: '<div><comp-one ref="comp1" :active="true" :click324="handleClick"></comp-one><comp-one :active="false"></comp-one></div>',
  data:{
    prop1:'324'
  },
  mounted(){
    console.log(this.$refs.comp1);
  },
  methods:{
    handleClick(){
      this.prop1 =+ 1;
      console.log('i got it');
    }
  }
})
