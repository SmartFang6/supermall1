<template>
  <div class="table">
    <div
      v-for="(item,index) in titles"
      class="table-item"
      :class="{active: index === currentIndex}"
      @click="itemClick(index)"
      :key='item'>
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  computed: {},
  createds: {},
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('tabClick',index)
    }
  }
};
</script>
<style  scoped>
.table {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.table .table-item {
  flex: 1;
}
.table-item span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>