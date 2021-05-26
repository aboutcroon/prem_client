<template>
  <div>
    <tips></tips>
    <sign></sign>
    <hot-list></hot-list>
    <ads></ads>
    <links></links>
  </div>
</template>

<script>
import Tips from './Tips'
import Sign from './Sign'
import HotList from './HotList'
import Ads from './Ads'
import Links from './Links'
export default {
  name: 'Sidebar',
  components: {
    Tips,
    Sign,
    HotList,
    Ads,
    Links
  }
}
</script>

<style>

</style>
