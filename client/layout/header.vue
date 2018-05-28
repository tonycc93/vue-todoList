<template>
    <header :class="$style.mainHeader">
        <h1>JTodo</h1>
    </header>
</template>

<script>
export default {
  // cssModules生成的computed对象
  computed: {
    $style () {
      return {
        mainHeader: ''
      }
    }
  }
}
</script>


<style lang="stylus" module>
.main-header{
        text-align center
        h1{
            font-size 100px
            color rgba(225,227,247,0.9)
            font-weight 500
            margin 20px
        }
    }
</style>