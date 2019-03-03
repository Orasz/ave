import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import footerVue from '@/components/Footer.vue'
Vue.config.productionTip = false

Vue.component('footerVue',footerVue);



new Vue({
  router,
  render: h => h(App)
}).$mount('#app',)
