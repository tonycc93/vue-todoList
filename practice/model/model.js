import Vue from "vue";

const component = {
  model:{
    prop:'value1',
    event:'event'
  },
  props:['text','value1'],
  template:'<div><input type="text" @input="handleInput" :value="value1" /></div>',
  methods:{
    handleInput(e){
      this.$emit('change',e.target.value)
    }
  }
}

new Vue({
  components:{
    CompOne: component
  },
  el:'#root',
  template:'<div><comp-one :text="value1" @change="nowHandleInput"></comp-one></div>',//可直接替换用v-model，vue的实现原理就是这样，v-model='text'
  data(){
    return{
      text:123,
      value1:123123
    }
  },
  methods:{
    nowHandleInput(value) {
      this.value1 = value
    }
  }
})
