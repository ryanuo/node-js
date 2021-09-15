<!--
 * @Description: 
 * @Author: Harry
 * @Date: 2021-09-15 19:25:40
 * @Url: https://u.mr90.top
 * @github: https://github.com/rr210
 * @LastEditTime: 2021-09-15 19:48:12
 * @LastEditors: Harry
-->
<template>
  <div>
    <div class="counter-container">
      <!-- 数量 -1 按钮 -->
      <button type="button" class="btn btn-light btn-sm" @click="onSubClick">
        -
      </button>
      <input
        type="number"
        class="form-control form-control-sm ipt-num"
        v-model.number.lazy="number"
      />
      <button type="button" class="btn btn-light btn-sm" @click="onAddClick">
        +
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EsCounter",
  emits: ["numChange"],
  watch: {
    number(newVal) {
      const parseIntRes = parseInt(newVal);
      if (!isNaN(parseIntRes) && parseIntRes < 1) {
        this.number = 1;
        return;
      }
      if (String(newVal).indexOf(".") !== -1) {
        this.number = parseIntRes;
        return;
      }
      this.$emit('numChange',this.number)
    },
  },
  props: {
    // 初始数量值【只读数据】
    num: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      // min 属性的值默认为 NaN，表示不限制最小值
      default: NaN,
    },
  },
  data() {
    return {
      // 内部状态值【可读可写的数据】
      // 通过 this 可以访问到 props 中的初始值
      number: this.num,
    };
  },
  methods: {
    // -1 按钮的事件处理函数
    onSubClick() {
      if (!isNaN(this.min) && this.number - 1 < this.min) return;
      this.number -= 1;
    },
    // +1 按钮的事件处理函数
    onAddClick() {
      this.number += 1;
    },
  },
};
</script>
<style lang="sass" scoped>
.counter-container
  display: flex
  .btn
    width: 25px

  .ipt-num
    width: 34px
    text-align: center
    margin: 0 4px
</style>