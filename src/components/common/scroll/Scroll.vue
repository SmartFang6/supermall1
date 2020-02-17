<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  components:{},
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return {
      scroll:null
    }
  },
  computed:{},
  createds:{},
  methods:{
    scrollTo(x,y,time){
     this.scroll && this.scroll.scrollTo(x,y,time)
    },
    refresh(){
      // console.log('111')
      this.scroll && this.scroll.refresh()
    }
  },
  mounted(){
    //创建scroll对象
    this.scroll = new BScroll(this.$refs.wrapper,{
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad,
      click:true
    })
    //监听滚动位置
    this.scroll.on('scroll',(position) =>{
    //  console.log(position) 
      this.$emit('scroll',position)
    })
    //监听滚动到底部
    this.scroll.on('pullingUp',()=>{
      // console.log('上拉加载更多')
      this.$emit('pullingUp')
    })
  },
  watch: {
    data() {
      setTimeout(this.scroll.refresh(), 20)
    }
  }
}
</script>
<style  scoped>
 
</style>