<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="detailNav"/>
    <scroll class="centent" ref="scroll" @scroll="detailScroll" :probe-type="3">
      <detail-swiper :top-imgs="topImgs" />
      <detail-base-info :goods="goods" />
      <!-- <detail-base-infocopy :goods="goods"></detail-base-infocopy> -->
      <detail-shop :shop="shop" />
      <detail-info :detail-info="detailInfo" @detailimgLoad="detailimgLoad" />
      <detail-params ref="params" :params-info="paramsInfo" />
      <detail-comment ref="recommend" :comment-info="commentInfo" />
      <goods-list ref="goodslist" :goods="recommend" />
    </scroll>
     <back-top class="back-top" @click.native="backTop" v-show="isShowBt"></back-top>
     <detail-bottom-bar @addCarts="addCarts"></detail-bottom-bar>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShop from "./childComps/DetailShop";
import DetailInfo from "./childComps/DetailInfo";
import DetailParams from "./childComps/DetailParams";
import DetailComment from "./childComps/DetailComment";
import DetailBottomBar from "./childComps/DetailBottomBar";

import GoodsList from "content/goods/GoodsList";
import Scroll from "common/scroll/Scroll";
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend
} from "network/detail";
import { debounce } from "@/common/tools";
import { ImageLoad,backTops } from "@/common/mixin";

export default {
  name: "detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    // DetailBaseInfocopy
    DetailBaseInfo,
    DetailShop,
    Scroll,
    DetailInfo,
    DetailParams,
    DetailComment,
    GoodsList,
    DetailBottomBar,
  },
  props: {},
  data() {
    return {
      iid: null,
      topImgs: [], //存储轮播图数据的地方
      goods: {}, //存储商品详细信息数据的地方
      shop: {}, //.存储店铺信息
      detailInfo: {}, //.存储下方详情图片
      paramsInfo: {}, //.存储详情信息
      commentInfo: {}, //储存评论信息
      recommend: [], //推荐数据
      themTopY: [], //顶部点击滚动到位置保存的y值
      getThemTopY: null, //对保持的y值进行防抖
      currentIndex:0,
    };
  },
  mixins: [ImageLoad,backTops],
  mounted() {
    // let newRefresh = debounce(this.$refs.scroll.refresh,500)
    // this.imgLoad = ()=>{
    //   newRefresh()
    // }
    // this.$bus.$on('imgLoad',this.imgLoad)
  },
  destroyed() {
    this.$bus.$off("itemImgLoad", this.itemimgLoad1);
  },
  computed: {},
  created() {
    //保存传入的iid
    this.iid = this.$route.params.iid;
    //根据iid请求数据
    getDetail(this.iid).then(res => {
      // console.log(res.data)
      //1.获取顶部轮播图的数据
      const data = res.data.result;
      this.topImgs = data.itemInfo.topImages;
      //2获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // console.log(this.goods)
      //3.创建店铺信息
      this.shop = new Shop(data.shopInfo);
      // console.log(this.shop)
      //4.存储下方详情图片
      this.detailInfo = data.detailInfo;
      // console.log(this.detailInfo)
      //5.获取参数信息
      this.paramsInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      //  console.log(data)
      //6.储存评论信息
      if (data.rate.cRate.length !== 0) {
        this.commentInfo = data.rate.list[0];
      }
     
      
      //  console.log(this.commentInfo)
    });
    getRecommend().then(res => {
      const data = res.data.data;
      this.recommend = data.list;
      // console.log(this.recommend)
    });
    this.getThemTopY = debounce(() => {
      const x = 44;
      this.themTopY.push(0);
      this.themTopY.push(this.$refs.params.$el.offsetTop-x);
      this.themTopY.push(this.$refs.recommend.$el.offsetTop-x);
      this.themTopY.push(this.$refs.goodslist.$el.offsetTop-x);
      // this.themTopY.push(Number.MAX_VALUE) 
      console.log(this.themTopY);
    }, 100);
  },
  methods: {
    //监听详情里面的图片加载完
    detailimgLoad() {
      this.newRefresh(); //图片加载完防抖
      this.getThemTopY(); //进行顶部跳转并且防抖
    },
    titleClick(index) {
      console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themTopY[index], 300); //进行对应的跳转
    },
    detailScroll(position){
      this.isShowBt = (-position.y) > 800//判断滚动的y轴位置是否大于800
      const positionY = -position.y
      // console.log(positionY)
      const length = this.themTopY.length
      for(let i = 0;i<length;i++){
        if(this.currentIndex !==i && ((i<length -1 && positionY>=this.themTopY[i] && positionY < this.themTopY[i+1]) || (i === length-1 && positionY>=this.themTopY[i]))){
          this.currentIndex = i;
          console.log(this.currentIndex)
          this.$refs.detailNav.currentIndex = this.currentIndex
        }
      }
      //   for(let i = 0;i<length-1;i++){
      //     if(this.currentIndex !==1&&(i<length-1 && positionY <= this.themTopY[i] && positionY < this.themTopY[i+1])){
      //       this.currentIndex = i;
      // //     console.log(this.currentIndex)
      //     this.$refs.detailNav.currentIndex = this.currentIndex
      //     }
      //   }
    },
    addCarts(){
      //获取购物车需要展示的信息，并加入
      const product = {}
      product.iid = this.iid;
      product.img = this.topImgs[0];
      product.title = this.goods.title;
      product.price = this.goods.realPrice;
      product.desc = this.goods.desc;
      product.count = 1
     
      // this.$srore.cartList.push(product)
      // this.$store.commit('addCart', product)
      this.$store.dispatch('addCart', product).then(res=>{
        console.log(res)
        this.$toast.show('加入成功',1500)
      })
      // console.log(product)
    }
  }
};
</script>
<style  scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.back-top{
  position: fixed;
  bottom: 55px;
  right: 8px;
  z-index: 9;
}
.centent {
  height: calc(100vh - 44px - 49px);
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>