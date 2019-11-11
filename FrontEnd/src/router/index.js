import Vue from 'vue'
import Router from 'vue-router'
import SCG from '@/components/SCG'
import Resume from '@/components/Resume'
import Map from '@/components/Map'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/scg',
      name: 'scg',
      component: SCG
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    },
    {
      path: '/map',
      name: 'map',
      component: Map
    }
  ]
})
