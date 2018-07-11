import Api from '@/services/Api';

export default {
  get() {
    return Api().get('admin');
  },
  addService(service) {
    return Api().post('admin/create_service', service);
  },
};
