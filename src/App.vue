<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script type="text/javascript">
import MainTabBar from 'content/mainTabbar/mainTabBar.vue'
export default {
  name: "App",
  components: {
    MainTabBar
  }
};
</script>
<style>
@import url("assets/css/base.css");
</style>
