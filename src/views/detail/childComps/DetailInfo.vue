<template>
  <div  v-if="Object.keys(detailInfo).length !== 0"  class="detail-img">
    <div class="desc">
      <div class="line"><span class="line-box line-l"></span></div>
      {{detailInfo.desc}}
      <div class="line line-r"><span class="line-box line-right"></span></div>
    </div>
    <div class="key">
      {{detailInfo.detailImage[0].key}}
    </div>
    <div class="img">
      <img v-for="item in detailInfo.detailImage[0].list" v-lazy="item" @load="imgLoad" :key="item">
    </div>
  </div>
</template>

<script>
export default {
  components:{},
  props:{
    detailInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {
      counter:0,
      imgLength:0
    }
  },
  computed:{},
  created(){},
  methods:{
    imgLoad(){
      //判断，所以图片加载完了，进行一次回调
      if(++this.counter === this.imgLength){
        this.$emit('detailimgLoad')
      }
    }
  },
  watch:{
    detailInfo(){
      //获取图片个数
      this.imgLength = this.detailInfo.detailImage[0].list.length
    }
  }
}
</script>
<style  scoped>
.detail-img{
  margin-top: 20px;
}
img{
  width: 100%;
}
.line{
  width: 80px;
  height: 1px;
  background-color: #b0aeae;
  margin: 5px 0;
}
.line-box{
  display: inline-block;
  width: 7px;
  height: 7px;
  background-color: #000;
  position: absolute;
}
.line-l{
  left: 4px;
  top: 3px;
}
.line-r{
  float: right;
  overflow: hidden;
  display: block;
  margin-top: 20px;
}
.line-right{
  right: 5px;
  bottom: 1px
}
.desc{
  font-size: 14px;
  padding: 5px;
  position: relative;
}
.key{
  margin-top: 5px;
  font-weight: 700;
}
</style>