<template>
  <div class="bottom-bar">
    <div class="bottom-left">
      <div><i class="icon serve"></i><span class="text">客服</span></div>
      <div><i class="icon shop"></i><span class="text">店铺</span></div>
      <div><i class="icon select"></i><span class="text">收藏</span></div>
    </div>
    <div class="bottom-right">
      <div class="cart" @click="addCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
    }
  },
  computed:{},
  created(){},
  methods:{
    addCart(){
      this.$emit('addCarts')
    }
  },
}
</script>
<style  scoped>
.bottom-bar{
  position: relative;
  height: 49px;
  /* bottom: 49px; */
  display: flex;
  bottom: -2px;
  text-align: center;
  z-index: 9;
  background:#fff;
}
.bottom-left{
  flex: 1;
  display: flex;
}
.bottom-left>div,.bottom-right>div{
  flex: 1;
}
.bottom-left .text{
  font-size: 13px;
}
.icon{
  display: block;
  width: 22px;
  height: 22px;
  margin:6px auto 3px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}
.serve{
  background-position: 0 -54px;
}
.shop{
  background-position: 0 -99px;
}
.bottom-right{
  flex: 1;
  display: flex;
  font-size: 15px;
  color: #fff;
  line-height: 49px;
}
.cart{
  background-color: rgb(241, 241, 36);
  color: #333;
}
.buy{
  background-color: #f69;
}
</style>