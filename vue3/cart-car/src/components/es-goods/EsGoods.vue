<!--
 * @Description: 
 * @Author: Harry
 * @Date: 2021-09-15 18:42:13
 * @Url: https://u.mr90.top
 * @github: https://github.com/rr210
 * @LastEditTime: 2021-09-15 19:51:55
 * @LastEditors: Harry
-->
<template>
  <div class="goods-container">
    <!-- 左侧图片和复选框区域 -->
    <div class="left">
      <!-- 复选框 -->
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          :id="id"
          :checked="checked"
          @change="onstateChange"
        />
        <label class="custom-control-label" :for="id">
          <img :src="thumb" alt="商品图片" class="thumb" />
        </label>
      </div>
    </div>
    <!-- 右侧信息区域 -->
    <div class="right">
      <!-- 商品名称 -->
      <div class="top">{{ title }}</div>
      <div class="bottom">
        <!-- 商品价格 -->
        <div class="price">￥{{ price.toFixed(2) }}</div>
        <!-- 商品数量 -->
        <div class="count">
          <es-counter
            :num="count"
            :min="1"
            @numChange="getChangeNum"
          ></es-counter>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EsCounter from "../es-counter/Es-Counter.vue";
export default {
  components: { EsCounter },
  name: "EsGoods",
  emits: ["stateChange", "countChange"],
  props: {
    // 唯一的 key 值
    id: {
      type: [String, Number],
      required: true,
    },
    // 1. 商品的缩略图
    thumb: {
      type: String,
      required: true,
    },
    // 2. 商品的名称
    title: {
      type: String,
      required: true,
    },
    // 3. 单价
    price: {
      type: Number,
      required: true,
    },
    // 4. 数量
    count: {
      type: Number,
      required: true,
    },
    // 5. 商品的勾选状态
    checked: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    onstateChange(e) {
      this.$emit("stateChange", {
        id: this.id,
        checked: e.target.checked,
      });
    },
    getChangeNum(e) {
      this.$emit("countChange", {
        id: this.id,
        num: e,
      });
    },
  },
};
</script>

<style lang="sass" scoped>
.goods-container
  display: flex
  padding: 10px
  + .goods-container
    border-top: 1px solid #efefef

.goods-container
  display: flex
  padding: 10px

.left
  margin-right: 10px

.thumb
  display: block
  width: 100px
  height: 100px
  background-color: #efefef

.right
  display: flex
  flex-direction: column
  justify-content: space-between
  flex: 1

.top
  font-weight: bold

.bottom
  display: flex
  justify-content: space-between
  align-items: center

.price
  color: red
  font-weight: bold

.custom-control-label::before,
.custom-control-label::after
  top: 3.4rem
</style>