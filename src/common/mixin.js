import {debounce} from './tools'
import BackTop from 'content/backTop/BackTop';
export const ImageLoad = {
  data(){
    return{
      itemimgLoad1:null,
      newRefresh:null
    }
  },
  mounted(){
    //监听图片加载完成，判断goods里面的图片是否加载完毕，
    this.newRefresh = debounce(this.$refs.scroll.refresh,500)
    this.itemimgLoad1=()=>{
      this.newRefresh()
    }
    this.$bus.$on('itemImgLoad',this.itemimgLoad1)
    // console.log('itemimgLoad1')
  }
}
export const backTops = {
  components:{
    BackTop
  },
  data(){
    return{
      isShowBt:false
    }
  },
  methods: {
    backTop(){ //调用scroll里面的回到顶部
      this.$refs.scroll.scrollTo(0,0,500)
    }
    // contentScroll(position){ 
    //   this.isShowBt = (-position.y) > 800//判断滚动的y轴位置是否大于800
    // }
  },
}