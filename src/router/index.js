import Vue from 'vue';
import VueRouter from 'vue-router';
import login from '../views/login';

Vue.use(VueRouter);

const routes = [
  {path: '/login', component: login},
]

export default new VueRouter({
  mode: 'history',
  routes,
});