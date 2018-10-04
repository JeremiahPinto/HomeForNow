import RequestService from '@/services/RequestService';
import router from '@/router/index';

export default {
  state: {
    request: {},
    status: '',
  },

  getters: {
    request: state => state.request,
    stayType: state => state.request.lengthOfStay,
  },

  mutations: {
    REQUEST_LOAD: (state) => {
      // eslint-disable-next-line
      state.status = 'loading';
    },
    REQUEST_SUCCESS: (state, request) => {
      // eslint-disable-next-line
      state.status = 'success';
      // eslint-disable-next-line
      state.request = request;
    },
    REQUEST_ERROR: (state) => {
      // eslint-disable-next-line
      state.request = {};
      // eslint-disable-next-line
      state.status = 'error';
    },
    REQUEST_REMOVE: (state) => {
      // eslint-disable-next-line
      state.status = '';
      // eslint-disable-next-line
      state.request = {};
    },
  },

  actions: {
    SUBMIT_REQUEST({ commit, dispatch }, request) {
      return new Promise((resolve, reject) => {
        commit('REQUEST_LOAD');
        RequestService.search(request).then((resp) => {
          const services = resp.data.services;
          commit('REQUEST_SUCCESS', request);
          if (services.length) {
            console.log('no matches');
          } else {
            console.log(services);
            router.push('search', services);
          }
          resolve(resp);
        })
        .catch((error) => {
          commit('REQUEST_ERROR');
          reject(error);
        });
      });
    },
  },
};
