import Api from '@/services/Api';

export default {
  getBeds() {
    return Api().get('service');
  },
  updateService(service) {
    return Api().post('service/update', service);
  },
};
