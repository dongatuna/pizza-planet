import Vue from 'vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import {store} from './store/store.js'
import Accounting from 'accounting-js'
import App from './App.vue'

//this adds vue router to the entire project
Vue.use(VueRouter)


const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition){
    if(savedPosition){
      return savedPosition
    } else return{x: 0, y:0}
  }
})

Vue.filter('currency', val=>{
  return Accounting.formatMoney(val)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
