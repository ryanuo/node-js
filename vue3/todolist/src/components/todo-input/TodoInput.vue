<!--
 * @Description: 
 * @Author: Harry
 * @Date: 2021-09-15 14:10:26
 * @Url: https://u.mr90.top
 * @github: https://github.com/rr210
 * @LastEditTime: 2021-09-15 14:49:01
 * @LastEditors: Harry
-->

<template>
  <div>
    <!-- form 表单 -->
    <form class="form-inline" @submit.prevent="onFormSubmit">
      <div class="input-group mb-2 mr-sm-2">
        <!-- 输入框的前缀 -->
        <div class="input-group-prepend">
          <div class="input-group-text">任务</div>
        </div>
        <!-- 文本输入框 -->
        <input
          type="text"
          class="form-control"
          placeholder="请填写任
务信息"
          style="width: 356px"
          v-model.trim="taskname"
        />
      </div>

      <!-- 添加按钮 -->
      <button type="submit" class="btn btn-primary mb-2">添加新任务</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "TodoInput",
  // 声明自定义事件
  emits: "add",
  data() {
    return {
      taskname: "",
    };
  },
  methods: {
    onFormSubmit(e) {
      if (!this.taskname) return alert("任务名称不能为空");
      this.$emit("add", this.taskname);
      this.taskname = "";
    },
  },
};
</script>

<style lang="less" scoped>
</style>
