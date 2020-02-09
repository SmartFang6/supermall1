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
    scrollTo(x,y,time=300){
     this.scroll && this.scroll.scrollTo(x,x,time)
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad,
      click:true
    })
    this.scroll.on('scroll',(position) =>{
    //  console.log(position) 
      this.$emit('scroll',position)
    })
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