import Vue from "vue";

const childComponent = {
  template:'<div>child{{data.value}}</div>',
  inject:['grandparent','data'],//与上级节点的provide公用获取上级节点,这里inject的值不是reactive的
  mounted(){
    //console.log(this.$parent.$option.name);//只能找到父节点
    console.log(this.grandparent);

  }
}

const component = {
  name:'comp',
  components:{
    childComponent
  },
 // template: '<div :style="this.style"><div class="header"><slot name="header"></slot><div><div class="body"><slot name="body"></slot></div></div>',//插槽将this is content放进来
  data(){
    return{
      style:{
        width:"200px",//不支持写数字
        height:"200px",
        border:"1px solid #aaa"
      },
      text123:2345435
    }
  },
  template:'<div><child-component></child-component></div>'
  //template:'<div :style="this.style"><slot value="456" :aaa="this.text123"></slot></div>'
}

new Vue({
  components: {
    CompOne: component
  },
  el: '#root',
  //template: '<div><comp-one><span slot="header">this is header</span><span slot="body">this is body</span></comp-one></div>',
  template: '<div><comp-one ref="comp"><span slot-scope="props" ref="span">组件内：{{props.aaa}}父组件：{{text123}}</span></comp-one><input v-model="text123"></div>',

  data: {
    text123:123
  },
  // provide:{//provide不能用this，还没完成初始化对象
  //   grandparent: this

  // },
  provide(){
    //解决provide的值不是reactive的方法，不推荐的方法
    const data = {}
    Object.defineProperty(data,'value',{//这就是vue里reactive的实现方法基础
      get:() => this.text123,
      enumerable:true//可读取
    })
    //解决完成
    return{
      grandparent:this,
      data
    }
  },
  mounted(){
    // console.log(this.$refs.comp,this.$refs.span);

  }
})

