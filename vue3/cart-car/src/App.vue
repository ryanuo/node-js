<template>
  <div>
    <es-header title="购物车案例"></es-header>
    <div style="margin-top: 45px">
      <es-goods
        v-for="item in goodslist"
        :key="item.id"
        :id="item.id"
        :thumb="item.goods_img"
        :title="item.goods_name"
        :price="item.goods_price"
        :count="item.goods_count"
        :checked="item.goods_state"
        @stateChange="onGoodsStateChange"
        @countChange="onGoodsCountChange"
      ></es-goods>
      <es-footer
        :isfull="false"
        :total="total"
        :amount="amount"
        @fullChange="onFullStateChange"
      ></es-footer>
    </div>
  </div>
</template>

<script>
import EsFooter from "./components/es-footer/EsFooter.vue";
import EsGoods from "./components/es-goods/EsGoods.vue";
import EsHeader from "./components/es-header/EsHeader.vue";

export default {
  name: "App",
  components: { EsHeader, EsFooter, EsGoods },
  data() {
    return {
      goodslist: [],
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    // 请求商品列表的数据
    async getGoodsList() {
      // 1. 通过组件实例 this 访问到全局挂载的 $http 属性，并发起
      // Ajax 数据请求
      const { data: res } = await this.$http.get("/api/cart");
      // 2. 判断请求是否成功
      if (res.status !== 200) return alert("请求商品列表数据失败！");
      // 3. 将请求到的数据存储到 data 中，供页面渲染期间使用
      this.goodslist = res.list;
    },
    onGoodsStateChange(e) {
      const findres = this.goodslist.find((v) => v.id == e.id);
      if (findres) {
        findres.goods_state = e.checked;
      }
    },
    onFullStateChange(e) {
      this.goodslist.map((v) => (v.goods_state = e));
    },
    onGoodsCountChange(e) {
      const findres = this.goodslist.find((v) => v.id == e.id);
      if (findres) {
        findres.goods_count = e.num;
      }
    },
  },
  computed: {
    amount() {
      return this.goodslist
        .filter((v) => v.goods_state)
        .reduce((init, pre) => init + pre.goods_price * pre.goods_count, 0);
    },
    total() {
      return this.goodslist
        .filter((v) => v.goods_state)
        .reduce((init, pre) => init + pre.goods_count, 0);
    },
  },
};
</script>

<style lang="sass" scoped>
</style>
