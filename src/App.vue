<template>
  <div id="app">
    <div class="container">
      <AddTodo />
      <FilterTodos />
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from '@/components/Todos'
import AddTodo from '@/components/AddTodo'
import FilterTodos from '@/components/FilterTodos'

export default {
  name: 'App',
  components: {
    Todos,
    AddTodo,
    FilterTodos,
  },
}
</script>

<style>
html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.6;
  text-align: center;
  color: #2c3e50;
  background: #e8f7f0;
}

.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
