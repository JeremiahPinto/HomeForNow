import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import TermsOfUse from '@/components/TermsOfUse';
import About from '@/components/About';
import Contact from '@/components/Contact';
import ServiceProfile from '@/components/ServiceProfile';
import BedVacancies from '@/components/BedVacanciesList';
import ServiceDashboard from '@/components/ServiceDashboard';

import store from '@/store/store';

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
      path: '/terms_of_use',
      name: 'Terms of Use',
      component: TermsOfUse,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/profile', // Need to fix this route to service name later on
      name: 'ServiceProfile',
      component: ServiceProfile,
    },
    {
      path: '/search', // Need to fix this route to service name later on
      name: 'BedVacancies',
      component: BedVacancies,
    },
    {
      path: '/service', // Need to fix this route to service name later on
      beforeEnter: (to, from, next) => {
        if (store.getters.isAuthenticated) {
          next();
          return;
        }
        next('/');
      },
      children: [
        {
          path: '',
          name: 'ServiceDashboard',
          component: ServiceDashboard,
        },
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});
