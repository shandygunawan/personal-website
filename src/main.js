// Vue
import Vue from 'vue';
import VueRouter from 'vue-router';

// 3rd Parties
import vuetify from './plugins/vuetify';

// Local
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false


Vue.use(VueRouter);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
