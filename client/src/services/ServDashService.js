import Api from '@/services/Api';

export default {
  getBeds() {
    return Api().get('service');
  },
};
