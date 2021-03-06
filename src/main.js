// Vue
import Vue from 'vue';
import VueRouter from 'vue-router';

// 3rd Parties
import vuetify from './plugins/vuetify';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VueParticles from 'vue-particles';

// Local
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false


Vue.use(VueRouter);
Vue.use(VueParticles);

AOS.init();

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
