<template>
  <b-container class="p-0 text-center">
    <b-row no-gutters>
      <b-col cols="12">
        <h3 class="my-5">CRISIS CARE</h3>
      </b-col>

      <b-col cols="12">
        <b-row class="px-4">
          <b-col cols="4">
            <h4 class="fluid-h4">SERVICES</h4>
          </b-col>

          <b-col>
            <h4 class="fluid-h4">TOTAL</h4>
          </b-col>
          <b-col>
            <h4 class="fluid-h4">F</h4>
          </b-col>
          <b-col>
            <h4 class="fluid-h4">M</h4>
          </b-col>
          <b-col>
            <h4 class="fluid-h4">O</h4>
          </b-col>

          <b-col cols="3">
            <h4 class="fluid-h4">NUMBER</h4>
          </b-col>
        </b-row>
      </b-col>
      

      <b-col cols="12" class="mb-3">
        <crisis :Service="ServiceCrisis"/>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12">
        <h3 class="my-5">TRANSITIONAL</h3>
      </b-col>

      <b-col cols="12">
        <b-row class="px-4">
          <b-col cols="4">
            <h4 class="fluid-h4">SERVICES</h4>
          </b-col>

          <b-col>
            
          </b-col>

          <b-col cols="3">
            <h4 class="fluid-h4">NUMBER</h4>
          </b-col>
        </b-row>
      </b-col>

      <b-col cols="12">
        <crisis :Service="ServiceTransitional"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CrisisAvailability from './SubModules/CrisisAvailability';

export default {
  components: {
    crisis: CrisisAvailability,
  },
  data() {
    return {
      ServiceCrisis: {
        name: 'AYAS (Armadale Youth Accommodation Service)',
        number: '0412345678',
        type: 'crisis',
        bedAvailability: {
          male: 0,
          female: 10,
          either: 9,
        },
      },
      ServiceTransitional: {
        name: 'AYAS (Armadale Youth Accommodation Service)',
        number: '0412345678',
        type: 'transitional',
      },
    };
  },
};
</script>

<style scoped>
* {
  color: #676767;
}
</style>
