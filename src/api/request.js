import axios from 'axios'    

const instance = axios.create({    //创建axios实例，在这里可以设置请求的默认配置
  timeout: 10000, // 设置超时时间10s
  baseURL: process.env.NODE_ENV === 'production' ? '' : '/api'   //根据自己配置的反向代理去设置不同环境的baeUrl
})


/** 添加请求拦截器 **/
instance.interceptors.request.use(config => {
  
}, error=> {
  // 对请求错误做些什么
  return Promise.reject(error)
})

/** 添加响应拦截器  **/
instance.interceptors.response.use(response => {
  
}, error => {
  
})

export const get = ({url, data, config = {}}) => {
  return new Promise((resolve, reject) => {
    service({
      method: 'get',
      url: ``,
      data,
      ...config
    }).then(response => {
      if(response.status == 200) {
        resolve(response.data)
      }
    }).catch(error => {
      reject(error)
    })
  })
}

export const post = ({url, data, config = {}}) => {
  return new Promise((resolve, reject) => {
    service({
      method: 'post',
      url: ``,
      data,
      ...config
    }).then(response => {
      if(response.status == 200) {
        resolve(response.data)
      }
    }).catch(error => {
      reject(error)
    })
  })
}