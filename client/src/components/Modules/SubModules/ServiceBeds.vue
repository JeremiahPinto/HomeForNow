<template>
  <b-card>
    <b-row align-v="center">
      <b-col cols="3" md="2" class="text-center p-0">
        <b-img-lazy v-if="!bedIcon" src='../../../assets/Single.png' :style="{ height: '3rem' }" fluid/>
        <b-img-lazy v-if="bedIcon" src='../../../assets/Double.png' :style="{ height: '3rem' }" fluid/>
      </b-col>

      <b-col cols="9" md="4">
        <h4 class="m-md-0 fluid-h4"> {{ name }} </h4>
      </b-col>

      <b-col cols="12" md="6">
        <slot name="process"></slot>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  props: ['type', 'name'],
  computed: {
    bedIcon() {
      return this.type === 'ParentChild';
    },
  },
};
</script>

<style>

</style>
