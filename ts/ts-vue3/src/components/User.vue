<!--
 * @Description: 
 * @Author: Harry
 * @Date: 2021-11-27 17:29:45
 * @Url: https://u.mr90.top
 * @github: https://github.com/rr210
 * @LastEditTime: 2021-11-27 17:50:26
 * @LastEditors: Harry
-->
<template>
  <div>
    <button @click="setUsername('ww')">{{ username }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue'
interface User {
  username: string,
  age: number,
  // eslint-disable-next-line no-unused-vars
  setUsername(username: string): void,
  getUsername(): string
}
export default defineComponent({
  setup() {
    // 第一种写法
    // let user: User = reactive({
    //   username: "zs",
    //   age: 20,
    //   setUsername(username) {
    //     this.username = username
    //   },
    //   getUsername() {
    //     return this.username
    //   }
    // })
    // 第二种写法
    // let user = reactive<User>({
    //   username: "zs",
    //   age: 20,
    //   setUsername(username) {
    //     this.username = username
    //   },
    //   getUsername() {
    //     return this.username
    //   }
    // })
    // 第三种写法
    let user = reactive({
      username: "zs",
      age: 20,
      setUsername(username) {
        this.username = username
      },
      getUsername() {
        return this.username
      }
    }) as User
    let conut = ref<string | number>('20')
    // console.log({ ...toRefs(user) });
    return {
      ...toRefs(user),
      conut
    }
  }
})
</script>

<style>
</style>