<!--
 * @Description: 
 * @Author: Harry
 * @Date: 2021-09-14 21:39:16
 * @Url: https://u.mr90.top
 * @github: https://github.com/rr210
 * @LastEditTime: 2021-09-15 14:07:39
 * @LastEditors: Harry
-->
<template>
  <div>
    <ul class="list-group">
      <li
        class="
          list-group-item
          d-flex
          justify-content-between
          align-items-center
        "
        v-for="item in list" :key="item.id"
      >
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            :id="item.id"
            v-model="item.done"
          />
          <label class="custom-control-label" :for="item.id"
          :class="item.done?'delete':''"
            >{{item.task}}</label
          >
        </div>
        <span class="badge badge-success badge-pill" v-if="item.done">完成</span>
        <span class="badge badge-warning badge-pill" v-else>未完成</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    list: {
      type: Array,
      required:true,
      default: [],
    },
  },
};
</script>

<style lang="less" scoped>
.list-group{
  width: 400px;
}
.delete{
  text-decoration: line-through;
  color: gray;
  font-style: italic;
}
</style>