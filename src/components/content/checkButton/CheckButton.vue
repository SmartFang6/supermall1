<template>
  <div class="check-button" :class="{checked:isCheck}">
    <!-- <input type="checkbox " name="" id=""> -->
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  components:{},
  props:{
    isCheck:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return {
      
    }
  },
  computed:{},
  created(){},
  methods:{
  },
}
</script>
<style  scoped>
.check-button{
  border-radius: 50%;
  border: 2px solid #ccc;
  width: 18px;
  height: 18px;
}
.checked{
  background-color: var(--color-tint);
  border-color: var(--color-tint);
}
</style>