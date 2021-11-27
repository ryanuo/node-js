<!--
 * @Description: 
 * @Author: Harry
 * @Date: 2021-11-27 18:20:20
 * @Url: https://u.mr90.top
 * @github: https://github.com/rr210
 * @LastEditTime: 2021-11-27 18:32:43
 * @LastEditors: Harry
-->
<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {}
  },
  mounted() {
    console.log(this.$route.query);
    // console.log(this.$route.params);
  }
})
</script>

<style>
</style>