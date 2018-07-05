<template>
  <b-card class="border border-white mb-5">
    <b-row>
      <b-col cols="12" md="3" order="1">
        <slot name="image"></slot>
      </b-col>

      <b-col cols="12" md="9" order="3" order-md="2">
        <b-row>
          <b-col cols="12" md="6" order="2" order-md="1">
            <slot name="description"></slot>
          </b-col>

          <b-col cols="12" md="6" order="3" order-md="2">
            <b-row class="mb-2">
              <b-col cols="6">
                <b-button variant="pink" :style="{ width: 'inherit', height: '3em' }"> Apply Now </b-button>
              </b-col>

              <b-col cols="6">
                <b-button variant="outline-pink" :style="{ width: 'inherit', height: '3em' }"> More Info </b-button>
              </b-col>
            </b-row>
          </b-col>

          <b-col cols="12" md="6" order="1" order-md="3">
            <slot name="suburb"></slot>
          </b-col>

          <b-col cols="12" md="6" order="4" class="text-center">
            <h3 class="sec-color"> {{ availability }} </h3>
          </b-col>
        </b-row>
      </b-col>

      <b-col cols="12" order="2" order-md="3">
        <slot name="name"></slot>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      availability: 'Available',
    };
  },
};
</script>

<style scoped>
.card:hover {
  border: 1px solid var(--dark)!important;
}
</style>