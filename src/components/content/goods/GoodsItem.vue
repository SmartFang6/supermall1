<template>
  <div class="goods-item">
    <a :href="goodsitem.link">
      <img :src="goodsitem.show.img" alt />
      <div class="goods-info">
        <p>{{goodsitem.title}}</p>
        <span class="price">￥{{goodsitem.price}}</span>
        <span class="collect">{{goodsitem.cfav}}</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed() {},
  createds: {},
  methods: {}
};
</script>
<style  scoped>
.goods-item {
  padding: 4px;
  width: 50%;
}
.goods-item img {
  border-radius: 5%;
  width: 100%;
}
.goods-info {
  width: 100%;
  font-size: 12px;
  text-align: center;
}
.goods-info p {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 4px 2px;
}
.goods-info .price {
  color: var(--color-tint);
  margin-right: 20px;
}
.goods-info span {
  margin: 5px 0;
}
.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>