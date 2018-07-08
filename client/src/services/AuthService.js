import Api from '@/services/Api';

export default {
  setToken(token) {
    Api().defaults.headers.common.Authorization = token;
  },
  clearToken() {
    delete Api().defaults.headers.common.Authorization;
  },
  register(credentials) {
    return Api().post('register', credentials);
  },
  login(credentials) {
    return Api().post('login', credentials);
  },
};
