import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from './components/Admin.vue'
import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Delivery from './components/Delivery.vue'
import History from './components/History.vue'
import OrderingGuide from './components/OrderingGuide.vue'


import App from './App.vue'

//this adds vue router to the entire project
Vue.use(VueRouter)

const routes = [
  
  {path: '/', name: "homeLink", component: Home},
  {path: '/admin', name: "adminLink", component: Admin},
  {path: '/menu', name: "menuLink", component: Menu},
  {path: "/about", name: "aboutLink", component: About, 
    children:[
      {path:'/contact', name: "contactLink", component:Contact},
      {path:'/history', name: "historyLink", component:History},
      {path:'/delivery', name: "deliveryLink", component:Delivery},
      {path:'/ordering-guide', name: "orderingGuideLink", component:OrderingGuide}
    ]},
 
  //catch all for all routes - redirects to home page
  {path: '*', redirect: "/"}
]

const router = new VueRouter({
  routes,
  mode: "history"
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
