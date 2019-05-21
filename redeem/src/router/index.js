import Vue from 'vue'
import Router from 'vue-router'
import exchange from '@/components/exchange'
import intro from '@/components/intro'

Vue.use(Router)

const domain = location.host
console.log(domain);

export default new Router({
  mode: 'history',
  base: domain == 'localhost:8080' ? '/' : '/redeem/',
  routes: [

    {
      path: '/intro',
      name: 'intro',
      component: intro
    },
    {
      path: '/',
      name: 'exchange',
      component: exchange
    }
  ]
})
