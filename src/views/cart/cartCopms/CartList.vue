<template>
  <scroll ref="scroll" class="centent">
    <div class="cat-list">
       <cart-list-item v-for="(item,index) in cartList" :key="index" :product="item"></cart-list-item>
       <!-- <cart-list-item v-for="(item,index) in cartList" :key="index" :product="item"></cart-list-item>
       <cart-list-item v-for="(item,index) in cartList" :key="index" :product="item"></cart-list-item>
       <cart-list-item v-for="(item,index) in cartList" :key="index" :product="item"></cart-list-item>
       <cart-list-item v-for="(item,index) in cartList" :key="index" :product="item"></cart-list-item> -->
    </div>
  </scroll>
</template>

<script>
import Scroll from "common/scroll/Scroll";
import CartListItem from './CartListItem'
import { mapGetters } from "vuex";
export default {
  components: {
    Scroll,
    CartListItem
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["cartList"])
  },
  created() {},
  methods: {},
  activated(){
    this.$refs.scroll.refresh()
  }
};
</script>
<style  scoped>
.centent{
  height: calc(100vh - 88px - 49px);
  overflow: hidden;
}
</style>