import { createRouter, createWebHistory } from 'vue-router'
import Login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/dashboard', 
    component: Dashboard,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({  
  history: createWebHistory(),  // Use history mode (clean URLs)
  routes
})


//Route gaurd
router.beforeEach((to, from, next) => {
  const auth = getAuth();
  const requireAuth = to.matched.some(record => record.meta.requiresAuth)

  onAuthStateChanged(auth, user => {
    if (requiresAuth && !user) {
      next('/login')
    } else {
      next()
    }
  })
})



export default router
 