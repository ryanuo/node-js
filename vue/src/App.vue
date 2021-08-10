<template>
  <div>
    <h2>App.vue组件</h2>
    <div class="l-r">
      <Left></Left>
      <Right></Right>
    </div>
  </div>
</template>

<script>
import Left from "@/components/Left.vue";
import Right from "@/components/Right.vue";
export default {
  components: {
    Left,
    Right
  }
};
</script>

<style lang="less">
h2{text-align: center;border-bottom: 2px solid #ccc;padding: 10px 20px; margin: 20px;}
body{margin: 0;padding: 0;box-sizing: border-box;}
.l-r{display: flex;justify-content: space-evenly; align-items: center;}
h5{font-weight: 550;font-size: 20px;border-bottom: 2px solid #ccc;}
</style>>