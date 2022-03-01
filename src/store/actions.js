import request from '@/utils/request'
console.log(request)
const actions = {
  setGlobalLoading({ state }, globalLoading) {
    state.globalLoading = globalLoading
  },
  // 接口封装示例
  get({ commit }, data) {
    return request.get(`url`, { params: data })
  },
  post({ commit }, data) {
    return request.post(`url`, data)
  }
}
 
export default actions