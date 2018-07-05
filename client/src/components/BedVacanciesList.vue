<template>
  <b-container>

    <b-row :style="{ marginBottom: '80px' }">
      <b-col cols="12">
        <h1 class="bang fluid-h1">
          Let's Find A <br>
          Home
          <span class="sec-color"> {{ type }} </span>
        </h1>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" v-for="Service in Services" :key="Service.name">
        <Cards>
          <b-img-lazy slot="image" src="../assets/placeholder_image.png" fluid></b-img-lazy>
          <p slot="description"> {{ description(Service) }} </p>
          <h3 slot="suburb"> {{ Service.suburb }} </h3>
          <h2 slot="name"> {{ Service.name }} </h2>
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
      type: 'Right Now.',
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