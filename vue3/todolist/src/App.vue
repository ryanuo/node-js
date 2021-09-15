<template>
  <div>
    <todo-input @add="gettaskname"></todo-input>
    <todo-list :list="taskListC" class="mt-2"></todo-list>
    <todo-button v-model:active="btnIndex" class="mt-3"></todo-button>
  </div>
</template>

<script>
import TodoList from "./components/todo-list/TodoList.vue";
import TodoInput from "./components/todo-input/TodoInput.vue";
import TodoButton from "./components/todo-button/TodoButton.vue";

export default {
  name: "MyApp",
  components: {
    TodoList,
    TodoInput,
    TodoButton,
  },
  data() {
    return {
      todolist: [
        { id: 1, task: "周一早晨9点开会", done: false },
        { id: 2, task: "周一晚上8点聚餐", done: false },
        { id: 3, task: "准备周三上午的演讲稿", done: true },
      ],
      nextid: 4,
      btnIndex: 0,
    };
  },
  methods: {
    gettaskname(e) {
      this.todolist.push({
        id: this.nextid,
        task: e,
        done: false,
      });
      this.nextid++;
    },
  },
  computed:{
    taskListC(){
      switch(this.btnIndex){
        case 0:
          return this.todolist
        case 1:
          return this.todolist.filter(x=>x.done)
        case 2:
          return this.todolist.filter(x=>!x.done)
      }
    }
  }
};
</script>
<style lang="less" scoped>
</style>
