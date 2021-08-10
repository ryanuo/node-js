<template>
  <div>
    <h5>Count组件</h5>
    <p>count的值是{{ count }}</p>
    <h4>图书的种类有{{ book_list.length }}本</h4>
    <button @click="add">+1</button>
  </div>
</template>

<script>
export default {
  props: {
    init: Number,
  },
  data() {
    return {
      count: this.init,
      book_list: 0,
    };
  },
  methods: {
    add() {
      this.count++;
      this.$emit('numchange',this.count)
    },
    getBooklist() {
      const xhr = new XMLHttpRequest();
      xhr.addEventListener("load", () => {
        const res = JSON.parse(xhr.responseText);
        console.log(res);
        this.book_list = res.data;
      });
      xhr.open("get", "http://www.liulongbin.top:3006/api/getbooks");
      xhr.send();
    },
  },
  created() {
    this.getBooklist()
  },
};
</script>

<style lang="less">
</style>