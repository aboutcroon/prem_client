<template>
  <div class="tips">
    <div class="title flex-y">
      <span>Tips</span>
    </div>
    <div class="content">
      <section class="item-box flex">
        <div class="item" v-for="item in dataList" :key="item.createTime">
          {{ item.title }}
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import request from '../../common/request'
export default {
  name: 'Tips',
  data () {
    return {
      dataList: []
    }
  },
  methods: {
    async fetchData () {
      const res = await request.getTips()
      if (res && res.code === 200) {
        this.dataList = res.data
      } else {
        this.$message.error((res && res.message) || 'Tips error')
      }
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>

<style lang="less" scoped>
.tips {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 15px;
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

    .item-box {
      flex-wrap: wrap;
      border: 1px solid #dae0e6;
      border-bottom: none;
      border-right: none;
    }

    .item {
      width: 50%;
      height: 50px;
      border: 1px solid #dae0e6;
      border-top: none;
      border-left: none;
    }
  }
}
</style>
