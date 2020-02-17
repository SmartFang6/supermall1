<template>
  <div class="cart">
    <nav-bar class="nav-bar"><div slot="center">购物车<span>({{cartLength}})</span></div></nav-bar>
    <cart-list/>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from 'common/navBar/NavBar'
import {mapGetters} from 'vuex'
import CartList from './cartCopms/CartList'
import CartBottomBar from './cartCopms/CartBottomBar'
export default {
  components:{
    NavBar,
    CartList,
    CartBottomBar
  },
  props:{},
  data(){
    return {
    }
  },
  computed:{
    // cartLength(){
    //   return this.$store.state.cartList.length
    // }
    ...mapGetters(['cartList','cartLength'])
  },
  methods:{},
}
</script>
<style scoped>
.nav-bar{
  background-color: var(--color-tint);
  font-weight: bold;
  color: #fff;
  font-size: 18px;
}
</style>