import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './router'
import store from './store'

// 图片网络地址封装
import images from './utils/images'
Vue.mixin({
  data() {
    return {
      images: images
    }
  }
})
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);

import './assets/style/style.less'
// import ui from './components/ui'
// Vue.use(ui)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
