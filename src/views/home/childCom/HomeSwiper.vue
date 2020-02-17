<template>
  <swiper ref="swiper" v-if="banners.length">
    <swiper-item v-for="item in banners" :key="item.id">
      <a :href="item.link">
        <img :src="item.image" alt @load="imgLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "common/swiper/index.js";
export default {
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      isLoad:false//记录加载状态
    }
  },
  methods:{
    imgLoad(){
      if(!this.isLoad){
        this.$emit('swiperLoad')
        this.isLoad = true
      }
    }
  }
};
</script>
<style  scoped>
</style>