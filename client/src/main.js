// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { sync } from 'vuex-router-sync';
import axios from 'axios';

import App from './App';
import router from './router';
import store from './store/store';

sync(store, router);

Vue.use(BootstrapVue);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBDNE4k2KPwi1xE7bjbFIYXB4Na3HKHMxk',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    // // If you want to set the version, you can do so:
    // v: '3.26',
  },

  // // If you intend to programmatically custom event listener code
  // // (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  // // instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  // // you might need to turn this on.
  // autobindAllEvents: false,

  // // If you want to manually install components, e.g.
  // // import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  // // Vue.component('GmapMarker', GmapMarker)
  // // then disable the following:
  // installComponents: true,
});


Vue.config.productionTip = false;

const token = localStorage.getItem('user-token');
if (token) {
  axios.defaults.headers.common.Authorization = token;
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
