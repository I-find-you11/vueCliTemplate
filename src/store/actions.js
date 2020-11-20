import { get, post } from '@/api/request'
const actions = {
  increment({ commit, state }, num) {
    console.log(state)
    console.log(get, post)
    console.log(num)
    setTimeout(() => {
      commit('increment', num)
    })
  }
}
 
export default actions