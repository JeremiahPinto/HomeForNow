<template>
<div>
  <h1>
    Dashboard
  </h1>
  <div>
    {{user}}
  </div>
  <div>
    {{error}}
  </div>
</div>
</template>

<script>
import ServDashService from '@/services/ServDashService';

export default {
  data() {
    return {
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
