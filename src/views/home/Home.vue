<template>
  <div id="home">
    <nav-bar class="homenav">
      <div class="center" slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommends-view :recommend="recommend"></recommends-view>
    <featuer-view></featuer-view>
  </div>
</template>

<script>
import NavBar from 'common/navBar/NavBar' 
import {getHomeData} from 'network/home'
import HomeSwiper from './childCom/HomeSwiper'
import RecommendsView from './childCom/RecommendsView'
import FeatuerView from './childCom/FeatuerView'

export default {
  components:{
    NavBar,
    HomeSwiper,
    RecommendsView,
    FeatuerView
  },
  props:{},
  data(){
    return {
      banners:[],
      recommend:[]
    }
  },
  created(){
    getHomeData().then(res=>{
      console.log(res)
      this.banners = res.data.data.banner.list;  //把请求的网络数据保存下来
      this.recommend = res.data.data.recommend.list;
    })
  },
  computed:{},
  methods:{},
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
</style>