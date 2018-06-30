<template>
  <b-container>

    <b-row>
      <b-col cols="12">
        <b-carousel controls
                    indicators
                    img-height="150"
                    img-width="150"
        >
          <b-carousel-slide img-height="150"
                    img-width="150"
                    img-src="https://picsum.photos/1024/480/?image=52"></b-carousel-slide>
        </b-carousel>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12">
        <b-button variant="link">
          <i class="material-icons" :style="{ verticalAlign: 'bottom' }"> arrow_back </i>
          Back
        </b-button>
      </b-col>

      <b-col cols="12" class="text-center">
        <b-button variant="pink"> Contact </b-button>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12">
        <h1> {{ Service.name }} </h1>
      </b-col>

      <b-col cols="12">
        <h3> {{ Service.description }} </h3>
      </b-col>

      <b-col cols="12">
        <h4> {{ Service.about }} </h4>
      </b-col>
    </b-row>
    


  </b-container>
</template>

<script>
export default {
  data() {
    return {
      Service: {
        name: 'Calvary House',
        description: 'hakjhjk',
        about: 'bigfnia',
        amenities: [{
          icon: '',
          label: '',
        }],
        rules: 'vughbjnklm',
      },
    };
  },
};
</script>

<style scoped>

</style>