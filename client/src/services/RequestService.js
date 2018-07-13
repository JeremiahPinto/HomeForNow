import Api from '@/services/Api';

export default {
  search(credentials) {
    return Api().post('search', credentials);
  },
};
