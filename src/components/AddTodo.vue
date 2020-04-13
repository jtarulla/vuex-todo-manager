<template>
  <div>
    <p>-- ADD ONE --</p>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="title" placeholder="Add Task..." />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AddTodo',
  data() {
    return {
      title: '',
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    onSubmit(e) {
      e.preventDefault()
      this.addTodo(this.title)
      this.title = ''
    },
  },
  created() {
    this.addTodo()
  },
}
</script>

<style scoped>
p {
  text-align: left;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

form {
  display: flex;
}

input[type='text'] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
  border-radius: 25px;
}

input[type='submit'] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px solid #41b883;
  cursor: pointer;
  border-radius: 25px;
}
</style>
