<template>
  <b-container>
    <b-row no-gutters>
      <b-col cols="12">
        <h1 class="fluid-h1 bang mb-5"> {{ Service.name }} </h1>
      </b-col>

      <b-col cols="12">
        <b-card no-body id="ServiceDash">
          <b-tabs pills card class="nav-justified">
          <b-tab>
            <template slot="title">
              Bed<br> Management
            </template>
            <bedmanagement/>
          </b-tab>

          <b-tab>
            <template slot="title">
              Service<br> Profile
            </template>
            Tab Contents 2
          </b-tab>

          <b-tab>
            <template slot="title">
              Beds<br> Available
            </template>
            <bedavailability/>
          </b-tab>
        </b-tabs>
        </b-card>
        
      </b-col>
    </b-row>
  </b-container>
<!-- <div>
  
    
  <div>
    {{user}}
  </div>
  <div>
    {{error}}
  </div>
</div> -->
</template>

<script>
import ServDashService from '@/services/ServDashService';
import ServiceBedManagement from './Modules/ServiceBedManagement';
import ServiceBedAvailability from './Modules/ServiceBedAvailability';

export default {
  components: {
    bedmanagement: ServiceBedManagement,
    bedavailability: ServiceBedAvailability,
  },
  data() {
    return {
      Service: {
        name: 'Tinoca',
      },
      user: {
        message: 'empty',
      },
      error: '',
    };
  },
  methods: {
    async getData() {
      try {
        this.user = (await ServDashService.getBeds()).data;
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
<style scoped>
.service-tabs {
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
  border-radius: 0;
  color: #676767;
}
</style>

