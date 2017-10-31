import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/sections/Home'
import Hero from '@/components/elements/Hero'
import Description from '@/components/elements/Description'
import Work from '@/components/elements/Work'
import Knowledge from '@/components/elements/Knowledge'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
        components: {
            Home: Home,
            Hero: Hero,
            Description: Description,
            Work: Work,
            Knowledge: Knowledge,
        }
    }
  ]
})
