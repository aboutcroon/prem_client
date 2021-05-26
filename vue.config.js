// 加载path模块
const path = require('path')

module.exports = {
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set('@', path.resolve('src'))
  }
}
