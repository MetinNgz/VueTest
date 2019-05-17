<template>
  <div>
    <span class="md-title">Todos</span>
    <md-list v-for="todo in todos" :key="todo.id">
      <todo v-bind:todo="todo"/>
    </md-list>
    <add-todo-form/>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex';
  import addTodoForm from "./addTodoForm";
  import todo from "./todo";

  export default {
    name: 'TodoContainer',
    components: {addTodoForm, todo},

    methods: {
      ...mapActions(['fetchTodos', 'toggleTodo'])
    },

    computed:{
      ...mapGetters(['todos'])
    },
    created() {
      this.fetchTodos();
    }
  }
</script>

<style scoped>
  .done {
    text-decoration: line-through;
  }
</style>
