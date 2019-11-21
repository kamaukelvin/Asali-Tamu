import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import Admin from '../views/Admin.vue'
import AddNew from '../components/admin/AddNew.vue'
import Login from '../components/admin/Login.vue'
import firebase from 'firebase';
import 'firebase/firestore'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/menu',
    name: 'menu',
    component: Menu
  },
  {
    // page that requires authentication to view
    path: '/admin',
    name: 'admin',
    component: Admin,
    meta:{
      requiresAuth:true
    }

  },
  {
    path: '/addNew',
    name: 'addnew',
    component: AddNew,
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },

  // redirect incase user types navigates to a wrong path route
  {
    path: '*',
    redirect: '/'
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// Navigation guards

router.beforeEach((to, from, next) => {
  // store current user in a constant
  const currentUser = firebase.auth().currentUser;

  // check if current user matches record on database
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  // check if currentuser requires authentication and not logged in redirect to login page
  if(requiresAuth && !currentUser) next('/login')
 
  else next();
})

export default router
