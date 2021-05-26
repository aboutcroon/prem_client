<template>
  <div class="home flex">
    <div style="flex: 1">
      <panel></panel>
    </div>
    <div style="width: 400px;">
      <sidebar></sidebar>
    </div>
  </div>
</template>

<script>
import Panel from '../../components/Panel'
import Sidebar from '../../components/Sidebar'
export default {
  name: 'Home',
  components: {
    Sidebar,
    Panel
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.home {
  height: 100%;
}
</style>
