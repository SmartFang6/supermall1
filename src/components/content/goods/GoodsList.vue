<template>
  <div class="goods">
    <goods-item v-for="item in goods" :goodsitem="item"></goods-item> 
  </div>
</template>

<script>
import GoodsItem from './GoodsItem';
export default {
  components:{
    GoodsItem
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
    }
  },
  computed:{},
  createds:{},
  methods:{},
}
</script>
<style  scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>