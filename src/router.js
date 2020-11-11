import Vue from 'vue';
import Router from 'vue-router';
import Record from './components/Record';
import History from './components/History';
import Setting from './components/Setting';
import Login from './components/Login';
import Signup from './components/Signup';

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