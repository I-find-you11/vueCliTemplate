import axios from 'axios'    

// 全局操作
import router from '../router'
import store from '../store'
const { VUE_APP_URL, VUE_APP_URL_HTTPS, NODE_ENV } = process.env
const http = VUE_APP_URL_HTTPS === 'true' ? 'https' : 'http'

const request = axios.create({    //创建axios实例，在这里可以设置请求的默认配置
  timeout: 10000, // 设置超时时间10s
  baseURL:  NODE_ENV.indexOf('production') === -1 ? '/api/' : `${http}://${VUE_APP_URL}`  //根据自己配置的反向代理去设置不同环境的baeUrl
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
    return data
  }
}, error => {
  switch(error.response.data.code) {
    case 405:
      // 接口无权限自动跳转登录页面
      router.replace({name: 'login'})
      break
    default:

  }
  return error
})

export default request