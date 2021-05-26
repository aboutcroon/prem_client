<template>
  <div class="index flex-column">
    <rise-head></rise-head>
    <div style="height: 100%; padding: 20px 30px;">
      <router-view></router-view>
    </div>
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

<style>
.index {
  min-width: 1440px;
  min-height: 705px;
  height: 100%;
  background: #F4F5F5;
}
</style>
