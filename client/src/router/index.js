import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import About from '@/components/About';
import Contact from '@/components/Contact';
import ServiceProfile from '@/components/ServiceProfile';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/service', // Need to fix this route to service name later on
      name: 'ServiceProfile',
      component: ServiceProfile,
    },
  ],
});
