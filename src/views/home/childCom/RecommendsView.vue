<template>
  <div class="recommends">
    <div v-for="item in recommend">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <span>{{item.title}}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  components:{},
  props:{
    recommend:{
      type:Array,
      default(){
        return []
      }

    }
  },
  data(){
    return {
    }
  },
  computed:{},
  createds:{},
  methods:{},
}
</script>
<style  scoped>
.recommends{
 display: flex;
 text-align: center;
 margin-top: 10px;
 padding-bottom: 30px;
 border-bottom: 10px solid #eee;
}
.recommends div{
  flex: 1;
}
.recommends div img{
  border-radius: 25%;
  width: 80px;
  height: 80px;
  margin-bottom: 3px;
}
</style>