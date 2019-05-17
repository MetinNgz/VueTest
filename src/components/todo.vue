<template>
  <md-list-item>
    <md-icon v-on:click.native="deleteTodo(todo.id)">delete</md-icon>
    <span v-bind:class="{done:todo.done===true}" class="md-list-item-text" v-on:click="toggleTodo(todo.id)">{{todo.text}}</span>
  </md-list-item>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    name: "todo",
    props: ['todo'],
    methods: {...mapActions(['deleteTodo', 'toggleTodo'])}
  }
</script>

<style scoped>
  .done{
    text-decoration: line-through;
    color:green
  }
</style>
