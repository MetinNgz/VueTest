const state = {
  todos: []
};

const getters = {
  todos: (state) => state.todos,
};


const mutations = {
  setTodos: (state, todos) => state.todos = todos,

  addTodo: (state, {todoText, nextId}) => {
    const todo = {text: todoText, done: false, id: nextId};
    state.todos.push(todo)
  },

  toggleTodo(state, todoId) {
    let index = state.todos.findIndex(curr => curr.id === todoId);
    let currentTodo = state.todos[index];
    state.todos[index].done = !currentTodo.done;
  },
  deleteTodo(state, todoId) {
    let index = findIndexById(state, todoId);
    state.todos.splice(index, 1);
  }
};
const actions = {
  fetchTodos: async (ctx) => {
    const response = await fetch('https://my-json-server.typicode.com/MetinNgz/FAKE-DATA/todos');
    let todos = await response.json();
    ctx.commit('setTodos', todos);
  },
  toggleTodo: (ctx, todoId) => ctx.commit('toggleTodo', todoId),
  addTodo: (ctx, todoText) => {
    const payload = {todoText, nextId: getHighestId(ctx) + 1};
    ctx.commit('addTodo', payload)
  },
  deleteTodo: (ctx, todoId) => {
    ctx.commit('deleteTodo', todoId);
  }
};

const getHighestId = (ctx) => {
  let highestId = 0;
  ctx.getters.todos.forEach((todo) => {
    if (todo.id > highestId) {
      highestId = todo.id;
    }
  });
  return highestId;
};


const findIndexById = (state, todoId) => {
  return state.todos.findIndex(curr => curr.id === todoId);
};

export default {state, getters, actions, mutations};
