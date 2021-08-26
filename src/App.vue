<template>
  <div id="app">
    <add-todo />
    <filter-todos />
    <todos />
  </div>
</template>

<script>
import AddTodo from './components/AddTodo.vue'
import Todos from './components/Todos.vue'
import FilterTodos from './components/FilterTodos.vue'

export default {
  name: 'App',
  components: {
    AddTodo,
    Todos,
    FilterTodos
  }
}
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
</style>
