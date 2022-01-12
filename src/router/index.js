import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  
  {
    path: '/',
    name: 'index',
    component: () => import('@/pages/PageIndex.vue')
  }


];

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

export default router;
