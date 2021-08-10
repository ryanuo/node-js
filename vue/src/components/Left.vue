<template>
  <div>
    <h5>我是左组件</h5>
    <my-count :init="9" @numchange="getNewCount"></my-count>
    {{message}}
    <button @click="send">发送</button>
  </div>
</template>

<script>
import bus from '@/eventBus.js'
export default {
  data(){
    return{
      message:'',
      str:"黑云压城城欲摧,驻青沙柏菲会,借问酒家何处是,半江瑟瑟半江红"
    }
  },
  methods: {
    getNewCount(val) {
      this.message = val;
    },
    send(){
      bus.$emit('sendstr',this.str)
    }
  },
};
</script>

<style lang='less'>
</style>