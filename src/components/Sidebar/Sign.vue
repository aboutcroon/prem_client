<template>
  <div class="sign">
    <div>
      <div class="title flex-y">
        <span>Sign</span>
      </div>
      <div class="content">
        111
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.sign {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0px 1px 2px #dfe2e6, 0px 2px 8px #dfe2e6;

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
    margin-top: 10px;
  }
}
</style>
