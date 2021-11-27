<template>
  <router-link to="/">首页</router-link>
  <router-link to="/user">用户</router-link>
  <router-link to="/news">新闻</router-link>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App'
});
</script>

<style lang="scss" scoped>

</style>
