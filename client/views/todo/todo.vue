<template>
    <section class="real-app">
        <input 
            type="text"
            class="add-input"
            autofocus="autofocus"
            placeholder="接下来做什么！"
            v-on:keyup.enter="addTodo"
        >
        <Item 
        :todo="todo"
        v-for="todo in filterTodos"
        :key="todo.id"
        @del="deleteTodo"
        />
        <Tabs :filter="filter" :todos="todos" @toggle="toggleTabs" @clearCompleted="clearCompleted"></Tabs>
    </section>
</template>

<script>
import Item from './item.vue'
import Tabs from './tabs.vue'

let id = 0

export default {
  data () {
    return {
      todos: [],
      filter: 'all'
    }
  },
  computed: {
    filterTodos () {
      if (this.filter === 'all') {
        return this.todos
      }
      const completed = this.filter === 'completed'
      return this.todos.filter(todo => completed === todo.completed)
    }
  },
  components: {
    Item,
    Tabs
  },
  methods: {
    addTodo (e) {
      if (!e.target.value && e.target.value === '') return
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      })
      // console.log(e);
      e.target.value = ''
    },
    deleteTodo (id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
    },
    toggleTabs (state) {
      this.filter = state
    },
    clearCompleted () {
      this.todos = this.todos.filter(todo => !todo.completed)
    }
  }
}
</script>

<style lang="stylus" scoped>
.real-app{
    width 600px
    margin :0px  auto
    box-shadow :0px 0px 5px #666
}
.add-input{
    positon:relative;
    margin 0px
    width 100%
    font-size 24px
    font-family  inherit 
    font-weight:inherit
    line-height 1.4rem
    border 0;
    outline none 
    color inherit
    padding 6px
    border 1px solid #999
    box-shadow: inset 0 -1px 5px 0px rgba(0,0,0,0)
    box-sizing border-box
    font-smoothing:antialiased;
    padding 16px 16px 16px 60px
    border none  
}

</style>


