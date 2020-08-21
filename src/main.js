import Vue from 'vue'
import App from './App.vue'
import store from './store'

import Vant from 'vant'
import "vant/lib/index.css";

import lib from "./package/"
// import lib from "../lib/mobile-form-design.umd.min"
Vue.use(lib)

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
