import Api from '@/services/Api';

export default {
  post(type, data) {
    return Api().post(`search/${type}`, data);
  },
};
