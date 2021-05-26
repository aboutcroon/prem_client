// 封装 axios 的请求，返回重新封装的数据格式
// 对错误的统一处理
import axios from 'axios'
import config from '../config'
import errorHandler from '../utils/errorHandler'

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.prod,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  timeout: 10 * 1000 // 请求超时时间
})

instance.interceptors.request.use((config) => {
  return config
}, (err) => {
  // Do something with request error
  errorHandler(err)
  return Promise.reject(err)
})

instance.interceptors.response.use((response) => {
  const { data } = response
  return data
}, (err) => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error

  // err 是一个对象，里面有请求的 config, request, response
  errorHandler(err)
  return Promise.reject(err)
})

export default function (option) {
  // 因为这里 export 的不是 axios 实例，而是再次封装了一个函数来处理错误信息，所以最后一定要在 then 中返回 res 出去才可以被后续接收到
  // return new Promise((resolve, reject) => {
  //   instance(option).catch(res => reject(res)).then(res => resolve(res))
  // })
  return instance(option)
}
