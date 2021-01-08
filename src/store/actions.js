import request from '@/utils/request'
console.log(request)
const actions = {
  increment({ commit, state }, num) {
    console.log(state)
    console.log(num)
    setTimeout(() => {
      commit('increment', num)
    })
  }
}
 
export default actions