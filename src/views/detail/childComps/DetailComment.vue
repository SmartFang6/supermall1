<template>
  <div class="comment"  v-if="Object.keys(commentInfo).length !== 0" >
    <div class="top">
      <h3 class="lf">用户评价</h3>
      <span class="rt">更多 ></span>
    </div>
    <div class="centent">
      <div class="user" v-if="commentInfo.user.avatar">
        <img :src="commentInfo.user.avatar" alt="">
        <span>"{{commentInfo.user.uname}}</span>
      </div>
        <p>{{commentInfo.content}}</p>
        <div class="small">
          <span>{{commentInfo.created | showDate }} </span>
          <span>{{ commentInfo.style}}</span>
          <div class="img" v-if="commentInfo.images">
            <img v-for="item in commentInfo.images" :src="item" :key="item.id">
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from '@/common/tools.js'
export default {
  components:{},
  props:{
    commentInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {
    }
  },
  filters:{
    showDate(value){
      let date = new Date(value*1000);
      // return date = date.toLocaleString()
      return formatDate(date,'yyyy-MM-dd')
    }
  },
  computed:{},
  created(){},
  methods:{},
}
</script>
<style  scoped>
.comment{
  background-color: #fff;
}
.top{
  overflow: hidden;
  height: 50px;
  line-height: 50px;
  padding: 5px;
  border-bottom: 1px solid rgba(0,0,0,.1);
}
.lf{
  float: left;
}
.rt{
  float: right;
}
.user{
  margin: 10px 0;
}
.user img{
  width: 42px;
  height: 42px;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 5px;
}
.centent{
  padding: 10px;
}
.centent p{
  font-size: 18px;
}
.small{
  margin-top: 15px;
  font-size: 13px;
}
.small .img{
  margin: 8px 0;
}
.small .img img{
  width: 70px;  
  height: 70px;
}
</style>