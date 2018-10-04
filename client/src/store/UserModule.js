import AuthService from '@/services/AuthService';
import router from '@/router/index';

export default {
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
      localStorage.setItem('user-token', token); // store the token in localstorage
      AuthService.setToken(token);
      // eslint-disable-next-line
      state.status = 'success';
      // eslint-disable-next-line
      state.token = token;
    },
    AUTH_ERROR: (state) => {
      localStorage.removeItem('user-token'); // if the request fails, remove any possible user token if possible
      // eslint-disable-next-line
      state.token = '';
      // eslint-disable-next-line
      state.status = 'error';
    },
    AUTH_LOGOUT: (state) => {
      localStorage.removeItem('user-token'); // if the request fails, remove any possible user token if possible
      AuthService.clearToken();
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
            reject(err);
          });
      });
    },
    AUTH_LOGOUT({ commit }) {
      return new Promise((resolve) => {
        commit('AUTH_LOGOUT');
        resolve();
      });
    },
  },
};
