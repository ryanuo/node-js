<!--
 * @Description: 
 * @Author: Harry
 * @Date: 2021-09-15 16:52:40
 * @Url: https://u.mr90.top
 * @github: https://github.com/rr210
 * @LastEditTime: 2021-09-15 16:55:47
 * @LastEditors: Harry
-->
<template>
  <div
    class="header-container"
    :style="{ color: color, backgroundColor: bgcolor, fontSize: fsize + 'px' }"
  >
  {{title || '自定义标题'}}
  </div>
</template>

<script>
export default {
  name: "EsHeader",
  props: {
    title: {
      // 标题内容
      type: String,
      default: "es-header",
    },
    bgcolor: {
      // 背景颜色
      type: String,
      default: "#007BFF",
    },
    color: {
      // 文字颜色
      type: String,
      default: "#ffffff",
    },
    fsize: {
      // 文字大小
      type: Number,
      default: 12,
    },
  },
};
</script>

<style lang="sass" scoped>
.header-container
  height: 45px
  line-height: 45px
  text-align: center
  position: fixed
  top: 0
  left: 0
  width: 100%
  z-index: 999
</style>
