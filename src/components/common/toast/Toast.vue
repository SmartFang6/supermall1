<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
  components:{},
  props:{
  },
  data(){
    return {
      message:'',//toast显示的内容
      isShow:false //toast是否显示
    }
  },
  computed:{},
  created(){},
  methods:{
    show(msg,time = 1500){
      this.isShow = true
      this.message = msg
      setTimeout(()=>{
        this.isShow = false
        this.message = ""
      },time)
    }
  },
}
</script>
<style  scoped>
.toast{
  padding: 10px;
  position: fixed;
  z-index: 99;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  text-align: center;
  background-color: rgb(187, 80, 80,0.6);
  color: #fff;
}
</style>