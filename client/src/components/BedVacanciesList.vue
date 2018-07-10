<template>
  <b-container>

    <b-row class="mb-3">
      <b-col cols="12">
        <h1 class="bang fluid-h1">
          Let's Find A <br>
          Home
          <span class="sec-color"> {{ type }} </span>
        </h1>
      </b-col>
    </b-row>

    <b-row class="mb-5">
      <b-col cols="12" offset-sm="6" sm="6" offset-md="7" md="5" offset-lg="9" lg="3">
        <b-button variant="outline-dark" :style="{ width: 'inherit' }"> Apply To All </b-button>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" v-for="Service in Services" :key="Service.name">
        <Cards>
          <b-img-lazy slot="image" src="../assets/placeholder_image.png" fluid></b-img-lazy>
          <p slot="description"> {{ description(Service) }} </p>
          <h3 slot="suburb"> {{ Service.suburb }} </h3>
          <h2 slot="name"> {{ Service.name }} </h2>
          <h3 slot="availability" class="sec-color"> {{ Service.availability }} </h3>
        </Cards>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
import BedVacancies from './Modules/BedVacancies';

export default {
  components: {
    Cards: BedVacancies,
  },
  data() {
    return {
      type: 'Long Term',
      show: false,
      Services: [{
        name: 'Calvary House',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        suburb: 'Nedlands',
        availability: 'Available',
      },
      {
        name: 'AYAS (Armadale Youth Accommodation Service)',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        suburb: 'Armadale',
        availability: 'Not Available',
      }],
    };
  },
  methods: {
    description(Service) {
      if (Service.description.length > 299) {
        return Service.description.substring(0, 300).concat('...');
      }
      return Service.description;
    },
  },
};
</script>

<style scoped>
</style>