import axios from 'axios'    

// 全局操作
import router from '../router'
import store from '../store'
const { NODE_ENV, VUE_APP_API_URL, VUE_APP_URL_HTTPS } = process.env
console.log(NODE_ENV)
const http = VUE_APP_URL_HTTPS ? 'https' : 'https'

const request = axios.create({    //创建axios实例，在这里可以设置请求的默认配置
  timeout: 10000, // 设置超时时间10s
  baseURL: NODE_ENV.indexOf('production') === -1 ? `${http}://${VUE_APP_API_URL}` : '/api/'   //根据自己配置的反向代理去设置不同环境的baeUrl
})



/** 添加请求拦截器 **/
request.interceptors.request.use(config => {
  return config
}, error=> {
  // 对请求错误做些什么
  return Promise.reject(error)
})

/** 添加响应拦截器  **/
request.interceptors.response.use(response => {
  const { status, data } = response
  if(status >= 200 && status < 300) {
    const { code, type } = data
    // 流程正确走 code 1，然后走正常流程返回数据
    if(code == 1) {
      return data
    }
    // 这里是接口请求成功，但是流程出错，走自定义纠错流程
    /**
     * @type 类型
     */
    switch(type) {
      case '':
    }
  }
}, error => {
  return response
})

export default request