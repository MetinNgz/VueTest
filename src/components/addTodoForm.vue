<template>
    <md-field>
      <md-input v-model="todoText" type="text"/>
      <md-button :disabled="!todoText"   class="md-raised md-primary" @click="addTodoAndClearForm()">Add</md-button>
    </md-field>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    name: "addTodoForm",
    data: function () {
      return {
        todoText: ''
      }
    },
    methods: {
      ...mapActions(['addTodo']),
      addTodoAndClearForm: function(){
      this.addTodo(this.todoText);
        this.todoText = ''
      },
    }
  }
</script>

<style scoped>

</style>
