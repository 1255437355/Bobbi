import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import toCity from '@/components/toCity'
import paid from '@/components/paid'
// import exchange from '@/components/exchange'
// import result from '@/components/result'
import city from '@/components/city'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [{
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/toCity',
      name: 'toCity',
      component: toCity
    },
    {
      path: '/paid',
      name: 'paid',
      component: paid
    },
    // {
    //   path: '/exchange',
    //   name: 'exchange',
    //   component: exchange
    // },
    // {
    //   path: '/result',
    //   name: 'result',
    //   component: result
    // },
    {
      path: '/city',
      name: 'city',
      component: city
    }
  ]
})
