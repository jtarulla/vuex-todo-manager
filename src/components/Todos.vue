<template>
  <div>
    <h3>TODOS</h3>
    <div class="legend">
      <span>Double click to mark as complete</span>
      <span> <span class="incomplete-box"></span> = Incomplete </span>
      <span> <span class="complete-box"></span> = Complete </span>
    </div>
    <div class="todos">
      <div
        @dblclick="onDblClick(todo)"
        v-for="todo in allTodos"
        :key="todo.id"
        class="todo"
        v-bind:class="{ 'is-complete': todo.completed }"
      >
        {{ todo.title }}
        <i
          @click="deleteTodo(todo.id)"
          class="fa fa-trash"
          aria-hidden="true"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Todos',
  methods: {
    ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
    onDblClick(todo) {
      const updatedTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      }

      this.updateTodo(updatedTodo)
    },
  },

  computed: mapGetters(['allTodos']),
  created() {
    this.fetchTodos()
  },
}
</script>

<style scoped>
div {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.todos {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
}

.todo {
  position: relative;
  border: 1px solid #ccc;
  background: #35495e;
  padding: 1rem;
  width: auto;
  border-radius: 25px;
  color: rgb(243, 243, 245);
  text-align: center;
  cursor: pointer;
}
.is-complete {
  background: #41b883;
}

.legend {
  text-align: left;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1rem;
}

.complete-box {
  display: inline-block;
  height: 10px;
  width: 10px;
  background: #41b883;
}

.incomplete-box {
  display: inline-block;
  height: 10px;
  width: 10px;
  background: #35495e;
}

i {
  position: absolute;
  right: 10px;
  bottom: 10px;
  color: rgb(241, 58, 58);
  cursor: pointer;
}

@media (max-width: 650px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
