<template>
<b-container>
  <h1 class="fluid-h1">
    Dashboard
  </h1>
    <b-row>
      <h4>Users</h4>
      <b-col cols="12" v-for="user in users" :key=user.id>
        {{user}}
      </b-col>
    </b-row>
    <b-row>
      <h4>Services</h4>
      <b-col cols="12" v-for="service in services" :key=service.id>
        {{service}}
      </b-col>
    </b-row>
    <b-alert variant="danger">
      {{error}}
    </b-alert>

    <service/>
  </b-container>
</template>

<script>
import AdminDashService from '@/services/AdminDashService';
import ServiceDetails from './Modules/ServiceDetails';

export default {
  components: {
    service: ServiceDetails,
  },
  data() {
    return {
      message: 'No message',
      users: {},
      services: {},
      error: '',
    };
  },
  methods: {
    async getData() {
      try {
        const data = (await AdminDashService.get()).data;
        this.message = data.message;
        this.users = data.users;
        this.services = data.services;
      } catch (error) {
        this.error = error.response.data;
      }
    },
  },
  beforeMount() {
    this.getData();
  },
};
</script>
