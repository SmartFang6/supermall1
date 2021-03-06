import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = ()=> import('views/home/Home.vue')
const Cart = ()=> import('views/cart/Cart.vue')
const Profile =()=>import('views/profile/Profile.vue')
const Category =()=>import('views/category/Category.vue')
const Detail =()=>import('views/detail/Detail.vue')
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect: '/home'
  },
  {
    path:'/home',
    name:'home',
    component:Home
  },
  {
    path:'/category',
    name:'category',
    component:Category
  },
  {
    path:'/cart',
    name:'cart',
    component:Cart
  },
  {
    path:'/profile',
    name:'profile',
    component:Profile
  },{
    path: '/detail/:iid',
    name:'detail',
    component:Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
