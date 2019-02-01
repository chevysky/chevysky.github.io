import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import bodyer from '../components/bodyer'
import love from '../components/one'
import routerx from './routerx.js'

Vue.use(Router)

export default new Router({
  routes: [...routerx,
    {
      path: '/hello',
      name: 'HelloWorld',
      components: {a: HelloWorld,
        b: bodyer
      }
    },
    {
      path:'/body',
      name:'bodyer',
      components:{
        a:HelloWorld,
        b:love
      }
    }
  ]
})
