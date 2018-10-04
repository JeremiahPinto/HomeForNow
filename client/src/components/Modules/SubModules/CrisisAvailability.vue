<template>
  <b-card>
    <b-row align-v="center" class="text-center">
      <b-col cols="12" md="4">
        <h4 class="fluid-h4 mb-3 m-md-0 text-left"> {{ Service.name }} </h4>
      </b-col>

      <b-col> 
        <h4 class="fluid-h4 sec-color m-md-0"> {{ total }} </h4> 
      </b-col>

      <b-col v-if="Service.type === 'crisis'"> {{ Service.bedAvailability.male }} </b-col>
      <b-col v-if="Service.type === 'crisis'"> {{ Service.bedAvailability.female }} </b-col>
      <b-col v-if="Service.type === 'crisis'"> {{ Service.bedAvailability.either }} </b-col>

      <b-col cols="12" md="3">
        <h4 class="fluid-h4 m-md-0"> {{ Service.number }} </h4>
      </b-col>

    </b-row>
  </b-card>
</template>

<script>
export default {
  props: ['Service'],
  computed: {
    total() {
      const beds = this.Service.bedAvailability;
      return beds.male + beds.female + beds.either;
    },
  },
};
</script>

<style>

</style>
