import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/sections/Home'
import Hero from '@/components/elements/Hero'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
        components: {
            default: Home,
            hero: Hero,
        }
    }
  ]
})
