import Vue from 'vue';
import VueRouter from 'vue-router';
import login from '../views/login';
import project from '../views/project';

Vue.use(VueRouter);

const routes = [
  {path: '/login', component: login},
  {path: '/project', component: project},
]

export default new VueRouter({
  mode: 'history',
  routes,
});