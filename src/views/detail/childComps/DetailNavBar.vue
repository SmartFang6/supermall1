<template>
  <nav-bar>
    <div class="left" slot="left" @click="backHome">
      <img src="~assets/img/common/back.svg" alt />
    </div>
    <div class="center" slot="center">
       <div 
        class="c-item" 
        v-for="(item,index) in titles" :key="item"
        :class="{active:index === currentIndex}"
        @click="titleClick(index)">
         {{item}}
       </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "common/navBar/NavBar";
export default {
  components: {
    NavBar
  },
  props: {},
  data() {
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    };
  },
  computed: {},
  created() {},
  methods: {
    backHome(){
      this.$router.back()
    },
    titleClick(index){
      this.currentIndex = index;
      this.$emit('titleClick',index)
    }
  }
};
</script>
<style  scoped>
img{
  vertical-align: middle;
}
.center{
  display: flex;
}
.c-item{
  flex: 1;
}
.active{
  color: var(--color-high-text)
}
</style>