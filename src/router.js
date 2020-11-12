import Vue from 'vue';
import Router from 'vue-router';
import Record from './view/Record';
import History from './view/History';
import Setting from './view/Setting';
import Login from './view/Login';
import Signup from './view/Signup';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Record
    },
    {
      path: '/history',
      component: History
    },
    {
      path: '/setting',
      component: Setting
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/signup',
      component: Signup
    }
  ]
});