import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

import '../src/assets/iconfont/iconfont.css'
import '../src/assets/scss/style.scss'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import Card from './components/Card.vue'
Vue.component('m-card',Card)

import ListCard from './components/ListCard.vue'
Vue.component('m-list-card',ListCard)

Vue.prototype.$http=axios.create({
  baseURL:process.env.VUE_APP_API_URL || '/web/api',//生产环境用
  //baseURL: 'http://localhost:3000/web/api',//开发环境用
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
