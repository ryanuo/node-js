<!--
 * @Description: 
 * @Author: Harry
 * @Date: 2021-09-15 14:41:11
 * @Url: https://u.mr90.top
 * @github: https://github.com/rr210
 * @LastEditTime: 2021-09-15 15:00:06
 * @LastEditors: Harry
-->
<template>
  <div class="button-container mt-3">
    <div class="btn-group">
      <button
        type="button"
        class="btn"
        :class="active === 0 ? 'btn-primary' : 'btn-secondary'"
        @click="onBtnIndex(0)"
      >
        全部
      </button>
      <button
        type="button"
        class="btn"
        :class="active === 1 ? 'btn-primary' : 'btn-secondary'"
        @click="onBtnIndex(1)"
      >
        已完成
      </button>
      <button
        type="button"
        class="btn"
        :class="active === 2 ? 'btn-primary' : 'btn-secondary'"
        @click="onBtnIndex(2)"
      >
        未完成
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoButton",
  emits: ["update:active"],
  props: {
    active: {
      type: Number,
      required: true,
      // 默认激活索引值为 0 的按钮（全部：0，已完成：1，未完成：2）
      default: 0,
    },
  },
  methods: {
    onBtnIndex(index) {
      if (this.active == index) return;
      this.$emit("update:active", index);
    },
  },
};
</script>

<style lang="less" scoped>
.button-container {
  width: 400px;
  text-align: center;
}
</style>