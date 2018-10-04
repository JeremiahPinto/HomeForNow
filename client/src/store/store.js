import Vue from 'vue';
import Vuex from 'vuex';

import UserModule from './UserModule';
import RequestModule from './RequestModule';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true, // remove when in prod
  modules: {
    user: UserModule,
    request: RequestModule,
  },
});
