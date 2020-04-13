<template>
  <div>
    Filter Todos:
    <select @change="filterTodos($event)">
      <option value="10">10</option>
      <option value="5">5</option>
      <option value="1">1</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'FilterTodos',
  methods: mapActions(['filterTodos']),
}
</script>

<style scoped>
div {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

select {
  margin-top: 20px;
  padding: 6px;
  border: 1px solid #41b883;
  border-radius: 5px;
}
</style>
