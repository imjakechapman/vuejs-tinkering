import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Validations from 'vuelidate';

Vue.config.productionTip = false;
Vue.use(Validations);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
