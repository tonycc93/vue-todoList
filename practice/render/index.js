import Vue from "vue";

//template最终就是编译成render方法来生成dom，用的是createElement方法创建的虚拟dom，vload

const component = {
  // template: '<div :style="style"><slot></slot></div>',
  data(){
    return{
       style: {
         width: '200px',
         height: '200px',
         border: '2px solid #aaa'
       }
    }
  },
  render(createElement){
    return createElement('div',{
      style:this.style,
      // on:{
      //   click:()=>{
      //     this.$emit('click')
      //   }
      // },
    },this.$slots.header)
  }
}
new Vue({
  el: '#root',
  data:{
    value:123
  },
  components: {
    Comp: component
  },
  methods:{
    handleClick(){
      console.log('im handleClick');

    }
  },
  // template: '<div><comp ref="comp"><span ref="span">{{this.value}}</span></comp></div>',
  render(createElement) {//模拟render方法
    return createElement('comp',{
        ref:'comp',
        props:{},
        nativeOn: { //绑定到当前渲染组件的根节点，不需要发送$emit
          click: this.handleClick
        }
      },[//子节点需要以数组方式传入
        createElement('span',{
        ref:'span',
        slot:'header',
        // domProps:{
        //   innerHTML:'<span>abc</span>'
        // }
        // on:{
        //   click:this.handleClick
        // },
      },this.value)
    ])
    // return this.$createElement() 每个节点有自己的$createElement,render方法也会传一个进来
  }
})

