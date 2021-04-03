<template>
  <div class="index">
    <rise-head></rise-head>
    <router-view></router-view>
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

</style>
