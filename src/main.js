import 'bootstrap'
import 'bootstrap/scss/bootstrap.scss'
import 'element-ui/lib/theme-chalk/index.css'

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'

// Vue components libraries to import
import ElementUI from 'element-ui'
import VueFloatLabel from 'vue-float-label'

// Third party helper libraries
import axios from 'axios'

import App from './App'
import router from './router'
import VuexStore from './store'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(Router)
Vue.use(ElementUI)
Vue.use(VueFloatLabel)

const store = new Vuex.Store(VuexStore)

sync(store, router)

// Set ajax header defaults in Axios
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['Content-type'] = 'application/json'
axios.defaults.headers['Accept'] = 'application/json'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#root')
