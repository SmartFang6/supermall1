<template>
  <div v-if="Object.keys(goods).length !== 0"  class="detail-info"> 
    <div class="titles">
      <h3>{{goods.title}}</h3>
    </div>
    <div class="price">
      <span class="new-price">{{goods.newPrice}}</span>
      <s class="old-price">{{goods.oldPrice}}</s>
      <span class="discount" :style="{backgroundColor:this.goods.discountBgColor}">{{goods.discount}}</span>
    </div>
    <div class="info">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="express">
      <span v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
    };
  },
  computed: {
  },
  created() {
  },
  methods: {}
};
</script>
<style  scoped>
.detail-info{
  margin: 10px 0;
}
.titles{
  font-size: 18px;
}
.price{
  margin: 10px 0;
}
.new-price{
  color: var(--color-high-text);
  font-size: 24px;
}
.old-price{
  margin: 0 8px;
}
.discount{
  /* background-color: var(--color-high-text); */
  border-radius: 25px;
  padding: 5px 10px;
  color: #fff;
  /*让元素上浮一些: 使用相对定位即可*/
  position: relative;
  top: -8px;
}
.info{
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
}
.express{
  padding: 15px 0;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
}
.express span{
  color: #000;
}
.express img{
  width: 24px;
  height: 24px;
  vertical-align: middle;
  position: relative;
  top: -3px;
}
</style>