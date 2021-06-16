<template>
  <div class="index flex-column">
    <rise-head></rise-head>
    <router-view class="view"></router-view>
    <rise-foot></rise-foot>
  </div>
</template>

<script>
import RiseHead from '../components/Header'
import RiseFoot from '../components/Footer'
export default {
  name: 'index',
  components: {
    RiseHead,
    RiseFoot
  }
}
</script>

<style lang="less" scoped>
.index {
  min-width: 1440px;
  min-height: 705px;
  background: #F7F7F7;

  .view {
    width: 1200px;
    margin: 20px auto 0;
  }
}
</style>
