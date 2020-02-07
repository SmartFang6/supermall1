<template>
  <div id="home">
    <nav-bar class="homenav">
      <div class="center" slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommends-view :recommend="recommend"></recommends-view>
    <featuer-view></featuer-view>
    <tables class="tables" :titles="['流行','新款','精选']" @tabClick="tabClick"></tables>
    <goods-list :goods ="showGoods"></goods-list>
  </div>
</template>

<script>
import HomeSwiper from './childCom/HomeSwiper'
import RecommendsView from './childCom/RecommendsView'
import FeatuerView from './childCom/FeatuerView'

import Tables from 'content/table/Table'
import NavBar from 'common/navBar/NavBar'
import GoodsList from 'content/goods/GoodsList' 


import {getHomeData,getHomeGoods} from 'network/home'
export default {
  components:{
    HomeSwiper,
    RecommendsView,
    FeatuerView,
    NavBar,
    Tables,
    GoodsList
  },
  props:{},
  data(){
    return {
      banners:[],
      recommend:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop'
    }
  },
  created(){
    //文件创建好的时候请求数据
    this.getHomeData()
    //请求商品goods的数据
    this.getHomeGoods('pop') 
    this.getHomeGoods('new') 
    this.getHomeGoods('sell') 
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  methods:{
    //网络请求
    getHomeData(){
      getHomeData().then(res=>{
        this.banners = res.data.data.banner.list;  //把请求的网络数据保存下来
        this.recommend = res.data.data.recommend.list;
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1;
      getHomeGoods(type,page).then(res=>{
        // console.log(res.data.data.list)
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page += 1
      })
    },
    //父组件向子组件传递
    tabClick(index){
      switch(index){
        case 0:
          this.currentType = "pop"
          break
        case 1:
          this.currentType = "new"
          break
        case 2:
          this.currentType = "sell"
          break
      }
    }
  },
}
</script>
<style scoped>
  #home{
    padding-top: 44px;
    height: 3000px;
  }
  .homenav{
    background-color: #ff8198;
    font-weight: bold;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9;
  }
 .center{
   color: #fff;
 }
 .tables{
   position: sticky;
   top: 44px;
 }
</style>