<template>
  <div id="home">
    <nav-bar class="homenav">
      <div class="center" slot="center">购物街</div>
    </nav-bar>
    <scroll class="content" 
            ref="scroll" 
            :probe-type="3" 
            :pull-up-load="true" 
            @scroll="contentScroll"
            @pullingUp="loadMore"> <!-- $emit的名字可以使用驼峰 -->
      <home-swiper :banners="banners"></home-swiper>
      <recommends-view :recommend="recommend"></recommends-view>
      <featuer-view></featuer-view>
      <tables class="tables" :titles="['流行','新款','精选']" @tabClick="tabClick"></tables>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
     <back-top class="back-top" @click.native="backTop" v-show="isShowBt"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childCom/HomeSwiper";
import RecommendsView from "./childCom/RecommendsView";
import FeatuerView from "./childCom/FeatuerView";

import Tables from "content/table/Table";
import NavBar from "common/navBar/NavBar";
import GoodsList from "content/goods/GoodsList";
import Scroll from "common/scroll/Scroll";
import BackTop from 'content/backTop/BackTop';

import { getHomeData, getHomeGoods } from "network/home";
export default {
  components: {
    HomeSwiper,
    RecommendsView,
    FeatuerView,
    NavBar,
    Tables,
    GoodsList,
    Scroll,
    BackTop
  },
  props: {},
  data() {
    return {
      banners: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBt:false
    };
  },
  created() {
    //文件创建好的时候请求数据
    this.getHomeData();
    //请求商品goods的数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted(){
    //监听图片加载完成
    this.$bus.$on('itemImgLoad',()=>{
      this.$refs.scroll.scroll.refresh()
    })
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  methods: {
    //网络请求
    getHomeData() {
      getHomeData().then(res => {
        this.banners = res.data.data.banner.list; //把请求的网络数据保存下来
        this.recommend = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(res.data.data.list)
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.scroll.finishPullUp()
      });
    },
    //父组件向子组件传递
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    //组件的方法
    backTop(){
      this.$refs.scroll.scrollTo(0,0,500)
    },
    contentScroll(position){
      this.isShowBt = (-position.y) > 800
    },
    loadMore(){
      this.getHomeGoods(this.currentType)
      console.log('加载')
    }
  }
};
</script>
<style scoped>
#home {
  height: 100vh;
  /* position: relative; */
}
.homenav {
  background-color: #ff8198;
  font-weight: bold;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 9;
}
.center {
  color: #fff;
}
.tables {
  position: sticky;
  top: 44px;
}
.back-top{
  position: fixed;
  bottom: 55px;
  right: 8px;
  z-index: 9;
}
.content{
   /* height:cacl(100%-44px-49px); */
   overflow: hidden;
   position: absolute;
   top: 44px;
   left: 0;
   right: 0;
   bottom: 49px;
 }
</style>