<template>
  <div id="home">
    <nav-bar class="homenav">
      <div class="center" slot="center">购物街</div>
    </nav-bar>
    <tables ref="tabControl1" class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick" v-show="istabfixed"></tables>
    <scroll class="content" 
            ref="scroll" 
            :probe-type="3" 
            :pull-up-load="true" 
            @scroll="contentScroll"
            @pullingUp="loadMore"> <!-- $emit的名字可以使用驼峰 -->
      <home-swiper :banners="banners" @swiperLoad="swiperLoad"></home-swiper>
      <recommends-view :recommend="recommend"></recommends-view>
      <featuer-view></featuer-view>
      <tables ref="tabControl2" :titles="['流行','新款','精选']" @tabClick="tabClick"></tables>
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


import { getHomeData, getHomeGoods } from "network/home";
import {debounce} from '@/common/tools'
import {ImageLoad,backTops} from '@/common/mixin'
export default {
  components: {
    HomeSwiper,
    RecommendsView,
    FeatuerView,
    NavBar,
    Tables,
    GoodsList,
    Scroll
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
      tabOffset:0,
      istabfixed:false,
      saveY:0 ,//保存离开时页面的位置
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
  mixins:[ImageLoad,backTops],
  mounted(){
    //监听图片加载完成，判断goods里面的图片是否加载完毕，
    // const refresh = debounce(this.$refs.scroll.refresh,500)
    // this.imgLoad=()=>{
    //   refresh()
    // }
    // this.$bus.$on('itemImgLoad',this.imgLoad)
    console.log(1)
  },
  computed: {
    showGoods() { //判断显示goods中哪一页的数据
      return this.goods[this.currentType].list;
    }
  },
  activated(){
    this.$refs.scroll.scrollTo(0,this.saveY,50)
    this.$refs.scroll.refresh()
    console.log(this.saveY)
  },
  deactivated(){
    //离开时，保存scroll的Y值
    this.saveY = this.$refs.scroll.scroll.y
    console.log(this.saveY)
    // 取消对itemImgLoad的使用
    this.$bus.$off('itemImgLoad',this.itemimgLoad1)
  },
  methods: {
    //网络请求
    getHomeData() {
      getHomeData().then(res => {
        this.banners = res.data.data.banner.list; //把请求的网络数据保存下来
        this.recommend = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) { //发送网络请求，并把数据保存到goods变量中
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
      this.$refs.tabControl1.currentIndex = index; //让2各tabcontrol保持一致
      this.$refs.tabControl2.currentIndex = index;
    },
    //组件的方法
    // backTop(){ //调用scroll里面的回到顶部
    //   this.$refs.scroll.scrollTo(0,0,500)
    // },
    contentScroll(position){ 
      this.isShowBt = (-position.y) > 800//判断滚动的y轴位置是否大于800
      //使tabcontrol吸顶
      this.istabfixed = (-position.y)>this.tabOffset
    },
    loadMore(){ //加载更多的goods商品
      this.getHomeGoods(this.currentType) //调用上面的getHomeGoods，来判断加载哪一个
      // console.log('加载')
    },
   swiperLoad(){ //判断轮播组件是否加载完毕
    this.tabOffset = this.$refs.tabControl2.$el.offsetTop
    //  console.log(this.tabOffset)
   }
  }
};
</script>
<style scoped>
#home {
  height: 100vh;
  background-color: #fff;
  /* position: relative; */
}
.homenav {
  background-color: #ff8198;
  font-weight: bold;
}
.center {
  color: #fff;
}
/* .tables { //吸顶效果，但是由于堆叠上下文的原因在本例子中无法使用
  position: sticky;
  top: 44px;
} */
.tab-control{
  position: relative;
  z-index: 9;
  margin-top: -1px;
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