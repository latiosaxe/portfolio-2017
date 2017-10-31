// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Home from './components/sections/Home'
import Hero from './components/elements/Hero'
import HeroCanvas from './components/elements/HeroCanvas'

import router from './router'

Vue.config.productionTip = false


/* eslint-disable no-new */
const app = new Vue({
  // el: '#app',
  router,
  template: '<Home/>',
  components: {
    Home: Home
  }
}).$mount('#app')


