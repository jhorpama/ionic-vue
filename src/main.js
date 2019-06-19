import Vue from 'vue'
import App from './App.vue'
import router from './routes/router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import Ionic from '@ionic/vue'
import '@ionic/core/css/ionic.bundle.css';

Vue.use(Ionic);

router.beforeEach((to, from, next)  => {
  const authorization = to.matched.some(status => status.meta.requireAuth )
  console.log(to.matched, from, authorization);
  next()
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
