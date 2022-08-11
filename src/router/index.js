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

let router = new VueRouter({
  mode: 'history',
  routes: routes
});

// Workaround for android/ios annoying in app webview (looking at you Instagram)
if(navigator.userAgent.toLowerCase().indexOf("android") > -1 || navigator.userAgent.toLowerCase().indexOf("iphone") > -1) {
  router = new VueRouter({
    mode: 'hash',
    routes: routes
  });
}

// Router guard for document's title
router.beforeEach( (to, _, next) => {
  Vue.nextTick( () => {
    document.title = to.meta.title;
    next();
  });
});

export default router;
