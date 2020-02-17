<template>
  <swiper class="detail-swiper"  ref="swiper" v-if="topImgs.length">
    <swiper-item v-for="item in topImgs" :key="item">
      <img :src="item" alt />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "common/swiper/index";
export default {
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImgs: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {}
};
</script>
<style  scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>