<template>
  <div class="cart-item">
    <div class="item-selector">
      <CheckButton :isCheck="product.checked" @click.native="checkClick"></CheckButton>
    </div>
    <div class="item-img">
      <img :src="product.img" alt="">
    </div>
    <div class="right">
      <p class="title">{{product.title}}</p>
      <p class="desc">{{product.desc}}</p>
      <div class="rb">
        <div class="price lf">￥{{product.price}}</div>
        <div class="count rt">{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'content/checkButton/CheckButton'
export default {
  components:{
    CheckButton
  },
  props:{
    product:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  data(){
    return {
      isCheck:false
    }
  },
  computed:{},
  created(){},
  methods:{
    checkClick(){
      this.product.checked = !this.product.checked
    }
  },
  
}
</script>
<style  scoped>
.lf{
  float: left;
}
.rt{
  float: right;
}
.cart-item{
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .item-selector {
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title, .desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-img {
    padding: 5px;
    /*border: 1px solid #ccc;*/
  }

  .item-img img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }

  .right {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }

  .rb {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }

  .rb .price {
    color: orangered;
  }
</style>