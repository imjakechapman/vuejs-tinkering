import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import IsComponentTransition from './views/IsComponentTransition.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/component-transitions',
      name: 'component-transitions',
      component: IsComponentTransition,
    },
  ],
});
