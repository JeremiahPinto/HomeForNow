// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { sync } from 'vuex-router-sync';

import App from './App';
import router from './router';
import store from './store/store';

sync(store, router);

Vue.use(BootstrapVue);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA3i_JFMmmWMoWvhYFQ8BubRxjCZddZNFw', // need to make it env "REPLACE-THIS-WITH-YOUR-KEY-FROM-ABOVE",
    libraries: 'places', // necessary for places input
  },
});
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
