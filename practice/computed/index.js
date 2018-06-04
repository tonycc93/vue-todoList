import Vue from "vue";

new Vue({
  el:'#root',
  template: '<div>finalName:{{finalName}} fullName:{{fullName}}<input v-model="obj.a"></div>',

  data: {
    firstName:'jiang',
    lastName:'tao',
    fullName:'',
    obj:{
      a:123
    }
  },
  computed:{
    finalName:{
      get() {
        return this.firstName + this.lastName;
      },
      set(finalName){

      }
    }

  },
  watch:{
    //immediate声明了才能在最初赋值的时候调用watch方法
    firstName:{
       handler(newName, oldName) {
         this.fullName = this.firstName + this.lastName;
       },
       immediate:true
    },
    //obj是一个对象，要加deep属性才能检测到对象的属性,效果等同于后面一个方法
    obj:{
      handler(newValue,oldValue){
        console.log('handle objChange')
      },
      immediate:true,
      deep:true,
    },
    'obj.a':{
      handler(){

      },
      immediate:true
    }
  }
})
