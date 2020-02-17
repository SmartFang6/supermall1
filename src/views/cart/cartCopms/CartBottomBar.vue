<template>
  <div class="bottom-bar">
    <div class="chx">
      <check-button :isCheck="isSelect" class="checkedbox" @click.native="checkClick"></check-button>
      <span>全选</span>
    </div>
    <div class="total">
      合计: ￥{{totalPrice}}
    </div>
    <div class="counts">
      去计算 ({{countsLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from "content/checkButton/CheckButton";
export default {
  components: {
    CheckButton
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    totalPrice(){
      return this.$store.state.cartList.filter(item =>{
        return item.checked
      }).reduce((pre,item)=>{
        return pre + item.price * item.count  
      },0).toFixed(2)
    },
    countsLength(){
      return this.$store.state.cartList.filter(item => item.checked).length
    },
    isSelect(){
      if(this.$store.state.cartList.length === 0) return false
      // return !(this.$store.state.cartList.filter(item => !item.checked).length)
      return !(this.$store.state.cartList.find(item => !item.checked))
    }
  },
  created() {},
  methods: {
    checkClick(){
      // if(this.isSelect){
      //   for(let item of this.$store.state.cartList){
      //     item.checked = !item.checked
      //   }
      //   // console.log(item)
      // }else{
      //   for(let item of this.$store.state.cartList){
      //     item.checked = true
      //   }
      // }
      if(this.isSelect){
        this.$store.state.cartList.forEach(item => item.checked = false)
      }else{
        this.$store.state.cartList.forEach(item => item.checked = true)
      }
    }
  }
};
</script>
<style  scoped>
.bottom-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  background-color: #eee;
}
.bottom-bar .total{
  flex: 1;
  text-align: center;
}
.chx{
  width: 80px;
}
.chx span{
  font-size: 18px;
}
.checkedbox {
  display: inline-block;
  margin: 11px 5px;
  box-sizing: border-box;
  line-height: 20px;
}
.counts{
  text-align: center;
  width: 100px;
  color: #fff;
  background-color: rgb(194, 108, 108);
}
</style>