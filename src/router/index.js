import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Contact from '../views/Contact.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path:'/cart',
    name:'Cart',
    component: Cart
  },{
    path:'/contact',
    name:'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
