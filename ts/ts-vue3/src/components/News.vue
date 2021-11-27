<!--
 * @Description: 
 * @Author: Harry
 * @Date: 2021-11-27 17:18:20
 * @Url: https://u.mr90.top
 * @github: https://github.com/rr210
 * @LastEditTime: 2021-11-27 18:32:34
 * @LastEditors: Harry
-->
<template>
  <div>news</div>
  <ul>
    <li v-for="(item,index) in list" :key="index">
      <router-link :to="`/newscontent/?aid=${index}`">{{ item }}</router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
interface News {
  title: string,
  count: number | string,
  list: string[]
}
let NewData = {
  title: "直男",
  count: "你好",
  list: []
} as News
export default defineComponent({
  data() {
    return NewData
  },
  computed: {
    reverse(): string {
      return this.title.split('').reverse().join("")
    }
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      this.list.push(`我是第${i}条新闻`)
    }
  }
})
</script>

<style>
</style>