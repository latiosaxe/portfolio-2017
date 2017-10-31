import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/sections/Home'
import Hero from '@/components/elements/Hero'
import Description from '@/components/elements/Description'
import Work from '@/components/elements/Work'
import Knowledge from '@/components/elements/Knowledge'
import Personal from '@/components/elements/Personal'
import Contact from '@/components/elements/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
            Personal: Personal,
            Contact: Contact,
        }
    }
  ]
})
