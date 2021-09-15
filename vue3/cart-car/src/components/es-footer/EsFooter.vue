<!--
 * @Description: 
 * @Author: Harry
 * @Date: 2021-09-15 16:59:22
 * @Url: https://u.mr90.top
 * @github: https://github.com/rr210
 * @LastEditTime: 2021-09-15 19:19:33
 * @LastEditors: Harry
-->
<template>
  <div class="footer-container">
    <!-- 全选按钮 -->
    <div class="custom-control custom-checkbox">
      <input
        type="checkbox"
        class="custom-control-input"
        id="fullCheck"
        @change="fullChange"
      />
      <label class="custom-control-label" for="fullCheck">全选 </label>
    </div>
    <div>
      <span>合计：</span>
      <span class="amount">￥{{ amount }}</span>
      <button type="button" class="btn btn-primary" :disabled="total === 0">
        结算({{ total }})
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EsFooter",
  emits: ["fullChange"],
  props: {
    // 已勾选商品的总价格
    amount: {
      type: Number,
      default: 0,
    },
    // 已勾选商品的总数量
    total: { type: Number, default: 0 },
  },
  methods: {
    fullChange(e) {
      this.$emit("fullChange", e.target.checked);
    },
  },
};
</script>

<style lang="sass" scoped>
.footer-container
  height: 50px
  width: 100%
  background-color: white
  border-top: 1px solid #efefef
  position: fixed
  bottom: 0
  left: 0
  display: flex
  justify-content: space-between
  align-items: center
  padding: 0 10px

.amount
  color: red
  font-weight: bold

.btn-primary
  height: 38px
  border-radius: 19px
  min-width: 90px
</style>