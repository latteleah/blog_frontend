import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Logout from '../components/Logout.vue'
import AdminBlog from '../views/AdminBlog.vue'
import AdminPost from '../views/AdminPost.vue'
import RegularBlog from '../views/RegularBlog.vue'
import RegularPost from '../views/RegularPost.vue'


const router = createRouter({
      history: createWebHistory(),
  routes: [
    {
      path: '/home',
      component: HomeView
    },
    {
      path: '/login',
      name : 'login',
      component: Login
    },
    {
      path: '/logout',
      name : 'logout',
      component: Logout
    },
    {
      path: '/:catchAll(.*)', //if user go to undefined path in this list
      redirect: '/home'
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminBlog
    },
    {
      path: '/admin/blog/:blogtitle',
      name: 'admin',
      component: AdminPost
    },
    {
      path : '/blog',
      name : 'blog',
      component : RegularBlog
    },
    {
      path : '/blog/:blogtitle',
      name : 'blog',
      component : RegularPost
    }
  ]
})

export default router
