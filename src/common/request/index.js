import axios from '@/common/axios'
import * as api from './api'

const request = {}
for (const i in api) {
  request[i] = function (option = {}) {
    // 只取出接口定义时的初始参数中的 url 和 methods
    const initOption = api[i]
    let mock = false
    const axiosOption = {
      method: initOption.method,
      url: initOption.url,
      headers: {}
    }

    // 处理mock
    if ('mock' in initOption) {
      mock = initOption.mock
    } else {
      mock = process.env.NODE_ENV === 'mock'
    }
    if (mock) {
      axiosOption.url = '/mock' + axiosOption.url
    }

    // 将 option 中的其余参数放入 axiosOption
    for (const o in option) {
      if (o !== 'headers') {
        axiosOption[o] = option[o]
      } else {
        if (!axiosOption.headers) {
          axiosOption.headers = {}
        }
        Object.assign(axiosOption.headers, option.headers)
      }
    }

    // axiosOption 传入到了 instance(axiosOption) 中
    return axios(axiosOption).then(res => {
      // 若接口定义时的初始参数中有 transResponse，且是开发环境时，则可以清洗数据
      if (process.env.NODE_ENV === 'development' && initOption.transResponse && typeof initOption.transResponse === 'function') {
        res = initOption.transResponse(res)
      }
      return res
    })
  }
}

export default request
