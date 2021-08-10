<template>
  <div>
    <h5>我是右组件</h5>
    <my-count :init="5"></my-count>
    <p>{{str}}</p>
  </div>
</template>

<script>
import bus from "@/eventBus.js";
export default {
  data() {
    return {
      str: "",
    };
  },
  methods: {},
  created() {
    bus.$on("sendstr", (res) => {
      this.str = res;
    });
  },
};
</script>

<style lang='less'>
</style>