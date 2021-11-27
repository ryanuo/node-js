<!--
 * @Description: 
 * @Author: Harry
 * @Date: 2021-11-27 16:58:18
 * @Url: https://u.mr90.top
 * @github: https://github.com/rr210
 * @LastEditTime: 2021-11-27 17:09:20
 * @LastEditors: Harry
-->
<template>
  <div @click="setTitle">{{ title }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
let title: string = '直男'
export default defineComponent({
  data() {
    return {
      title
    }
  },
  methods: {
    setTitle():void {
      this.title = '直男整改中'
    }
  }
})
</script>

<style>
</style>