<template>
  <div class="links">
    <a-card hoverable>
      <div class="title flex-y">
        <span style="margin-left: 10px;">Links</span>
      </div>
      <div class="content">
        111
      </div>
    </a-card>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.links {
  background: #fff;
  border-radius: 4px;
  margin-bottom: 15px;

  .title {
    height: 30px;
    position: relative;

    &::after {
      content: '';
      background: #f4f5f5;
      height: 1px;
      width: 100%;
      position: absolute;
      bottom: 0;
    }
  }

  .content {
    padding: 10px;
  }
}
</style>
