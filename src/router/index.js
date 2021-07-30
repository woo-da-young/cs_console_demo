import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/Home.vue'
import Login from '@/Login.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
      {
        path: '/',
        name: '',
        component: Home,
        meta: { authRequired: false },
      },
      {
        path: '/home',
        name: '',
        component: Home,
        meta: { authRequired: false },
      },
      {
        path: '/login',
        name: '',
        component: Login,
        meta: { authRequired: false },
      },
    ],
  });
  
  export default router;