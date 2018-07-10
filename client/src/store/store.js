import Vue from 'vue';
import Vuex from 'vuex';
import AuthService from '@/services/AuthService';
import router from '@/router/index';

Vue.use(Vuex);

export const UserModule = {
  state: {
    token: localStorage.getItem('user-token') || '',
    status: '',
  },

  getters: {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
  },

  mutations: {
    AUTH_REQUEST: (state) => {
      // eslint-disable-next-line
      state.status = 'loading';
    },
    AUTH_SUCCESS: (state, token) => {
      // eslint-disable-next-line
      state.status = 'success';
      // eslint-disable-next-line
      state.token = token;
    },
    AUTH_ERROR: (state) => {
      // eslint-disable-next-line
      state.token = '';
      // eslint-disable-next-line
      state.status = 'error';
    },
    AUTH_LOGOUT: (state) => {
      // eslint-disable-next-line
      state.status = '';
      // eslint-disable-next-line
      state.token = '';
    },
  },

  actions: {
    AUTH_REQUEST({ commit, dispatch }, user) {
      return new Promise((resolve, reject) => { // The Promise used for router redirect in login
        commit('AUTH_REQUEST');
        AuthService.login(user)
          .then((resp) => {
            const token = resp.data.token;
            localStorage.setItem('user-token', token); // store the token in localstorage
            AuthService.setToken(token);
            commit('AUTH_SUCCESS', token);
            if (resp.data.user.role === 'admin') {
              router.push('/admin');
            } else if (resp.data.user.role === 'service') {
              router.push('/service');
            }
            resolve(resp);
          })
          .catch((err) => {
            commit('AUTH_ERROR', err);
            localStorage.removeItem('user-token'); // if the request fails, remove any possible user token if possible
            reject(err);
          });
      });
    },
    AUTH_LOGOUT({ commit }) {
      return new Promise((resolve) => {
        commit('AUTH_LOGOUT');
        localStorage.removeItem('user-token'); // clear your user's token from localstorage
        AuthService.clearToken();
        resolve();
      });
    },
  },
};

export default new Vuex.Store({
  strict: true,
  modules: {
    user: UserModule,
  },
});
