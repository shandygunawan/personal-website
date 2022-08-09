import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  
  {
    path: '/',
    name: 'index',
    component: () => import('@/pages/PageIndex.vue'),
    meta: {
      title: "Home"
    }
  },

  {
    path: '/resume',
    name: 'resume',
    component: () => import('@/pages/PageResume.vue'),
    meta: {
      title: "Resume"
    }
  }


];

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

// Router guard for document's title
router.afterEach( (to) => {

  Vue.nextTick( () => {
    document.title = to.meta.title;
  });
});

export default router;
