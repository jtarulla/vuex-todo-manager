import axios from 'axios'

const state = {
  todos: [],
}

const getters = {
  allTodos: (state) => state.todos,
}

const actions = {
  async fetchTodos({ commit }) {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos?_limit=20'
      )
      commit('SET_TODOS', response.data)
    } catch (error) {
      console.log(error)
    }
  },
  async addTodo({ commit }, title) {
    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/todos',
        { title, completed: false }
      )
      commit('ADD_TODO', response.data)
    } catch (error) {
      console.log(error)
    }
  },
  async deleteTodo({ commit }, id) {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

      commit('DELETE_TODO', id)
    } catch (error) {
      console.log(error)
    }
  },
  // eslint-disable-next-line no-unused-vars
  async filterTodos({ commit }, e) {
    const limit = parseInt(
      e.target.value // vanilla JS  options[e.target.options.selectedIndex].innerText
    )
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    )
    commit('SET_TODOS', response.data)
  },
  async updateTodo({ commit }, updatedTodo) {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`,
        updatedTodo
      )
      commit('UPDATE_TODO', response.data)
    } catch (error) {
      console.log(error)
    }
  },
}

const mutations = {
  SET_TODOS(state, todos) {
    state.todos = todos
  },
  ADD_TODO(state, todo) {
    state.todos.unshift(todo)
  },
  DELETE_TODO(state, id) {
    state.todos = state.todos.filter((todo) => todo.id !== id)
  },
  UPDATE_TODO(state, updatedTodo) {
    const index = state.todos.findIndex((todo) => todo.id === updatedTodo.id)
    if (index !== -1) {
      state.todos.splice(index, 1, updatedTodo)
    }
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
