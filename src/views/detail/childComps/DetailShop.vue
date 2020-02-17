<template>
  <div class="shop-info"  v-if="Object.keys(shop).length !== 0" >
    <div class="shoptop">
      <img :src="shop.logo" alt="">
      <span>{{shop.name}}</span> 
    </div> 
    <div class="content">
      <div class="shopleft">
        <div class="c-lf">
          <h2>{{shop.fans | showFixed}}</h2>
          <p>总销量</p>
        </div>
        <div class="c-rt">
          <h2>{{shop.goodsCount}}</h2>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="shopright">
        <div class="iteminfo" v-for="item in shop.score" :key="item.id">
          <span>{{item.name}} </span>
          <div :class="{active:item.isBetter}">
            <span class="scoretext iscolor"> {{item.score}} </span>
            <span class="hight" v-if="item.isBetter">高</span>
            <span class="low" v-else>低</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
        <span>进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
  components:{},
  props:{
    shop:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {
      value:this.shop.fans
    }
  },
  filters:{
    showFixed(value){
      if(value<10000){
        return value
      }else{
        return (value/10000).toFixed(1) + "万"
      }
    }
  },
  computed:{},
  created(){},
  methods:{},
}
</script>
<style  scoped>
.shop-info{
  margin-top: 20px;
}
.shoptop img{
  width: 64px;
  height: 64px;
  border:1px solid #ccc;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 15px;
}
.shoptop span{
  font-size: 20px;
}
.content{
  display: flex;
  margin-top: 10px;
  text-align: center;
}
.content>div{
  flex: 1;
}
.shopleft{
  display: flex;

  margin-top: 10px;
}
.shopleft>div{
  flex: 1;
}
.shopleft>div h2{
  margin-bottom: 5px;
}
.shopleft>div p{
  font-weight: 700;
}
.shopright{
    border-left: 2px solid #ccc;
}
.iteminfo{
  padding: 3px 0;
}
.iteminfo div{
  display: initial;
}
.active .scoretext{
  color: red;
}
.iscolor{
  color: green;
  margin: 0 5px;
  width: 35px;
  display: inline-block;
}
.low{
  color: #fff;
  background-color: green;
  padding: 1px;
}
.hight{
  background-color: red;
  color: #fff;
  padding: 1px;
}
.bottom{
  text-align: center;
  margin-top: 15px;
}
.bottom span{
  text-align: center;
  display: inline-block;
  padding: 7px 28px;
  border-radius: 8px;
   background-color: #eee;
}
</style>