import { createRouter, createWebHistory } from 'vue-router'

import { getAuth, onAuthStateChanged } from 'firebase/auth'
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
  history: createWebHistory(),
  routes
})

// Improved route guard with async/await
router.beforeEach(async (to, from, next) => {
  const auth = getAuth()
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  
  // Wait for auth state resolution
  const user = await new Promise(resolve => 
    onAuthStateChanged(auth, (user) => resolve(user))
  )
  
  if (requiresAuth && !user) {
    next('/login')
  } else {
    next()
  }
})



export default router
 