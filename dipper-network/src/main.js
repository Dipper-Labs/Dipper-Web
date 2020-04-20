import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'
import ScrollReveal from 'scrollreveal'
import layer from 'vue-layer'
// import VueClipboard from "vue-clipboard2"
// Vue.use(VueClipboard)

import locales from '@/locales';
import animate from 'animate.css'


Vue.config.productionTip = false
window.ScrollReveal = ScrollReveal
Vue.prototype.$layer = layer(Vue);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n: locales,
  template: '<App/>',
  components: {
    App
  },
})
