<template>
  <b-container>

    <b-row>
      <b-col cols="12">
        <b-carousel controls
                    indicators
        >
          <b-carousel-slide ></b-carousel-slide>
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
        <b-button variant="pink" :style="{ width: '100px' }"> Contact </b-button>
      </b-col>
    </b-row>

    <b-row :style="{ marginTop: '25px' }">
      <b-col cols="12" class="text-center">
        <h1 class="fluid-h1"> {{ Service.name }} </h1>
      </b-col>

      <b-col cols="12">
        <h3> {{ Service.description }} </h3>
      </b-col>

      <b-col cols="12">
        <h4> {{ Service.about }} </h4>
      </b-col>
    </b-row>
    
    <b-row :show="show" class="text-center">
      <b-col cols="12">
        <h2 :style="{ marginBottom: '30px' }"> Amenities </h2>
      </b-col>
      <b-col cols="12">
        <b-row no-gutters>
          <b-col cols="12" sm="6" md="4" v-for="amenity in Service.amenities" :key="amenity.icon">
            <b-row no-gutters>
              <b-col offset="1" offset-sm="0" class="text-left">
                <h4>
                  <i  class="material-icons sec-color" 
                      :style="{ fontSize: '50px', verticalAlign: 'bottom' }"
                  >
                    {{ amenity.icon }}
                  </i> 

                  <span :style="{ verticalAlign: '35%' }">
                    {{ amenity.label }}
                  </span>
                </h4>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" class="text-center">
        <h2 :style="{ margin: '15px 0 10px' }">
          House Expectations
        </h2>
      </b-col>
      <b-col cols="12">
        <h4> {{ Service.rules }} </h4>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      Service: {
        name: 'AYAS (Armadale Youth Accommodation Service)',
        description: 'hakjhjk',
        about: 'bigfnia',
        amenities: [{
          icon: 'wifi',
          label: 'wifi',
        }],
        rules: 'vughbjnklm',
      },
    };
  },
  created() {
    if (this.Service.amenities.length > 0) {
      this.show = true;
    }
  },
};
</script>

<style scoped>

</style>