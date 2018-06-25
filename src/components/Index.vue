<template>
  <div class="index">
    <b-container>

      <b-row :style="{ marginBottom: '17vh' }">
        <b-col cols="12" md="8">
          <b-img src="../assets/landing_main.png" fluid/>
        </b-col>      
      </b-row>

      <b-form @submit="event.preventDefault()" id="locationForm">
        <b-form-group :invalid-feedback="invalidFeedback"
                      :valid-feedback="validFeedback"
                      :state="state"
        >
          <b-row>
            <b-col cols="12" lg="8">
              <b-form-input id="location"
                            ref="autocomplete"
                            v-model.trim="name"
                            size="lg"
                            type="text"
                            name="location"
                            placeholder="Where are you now - e.g. Subiaco"
                            autocomplete="on"
                            required
              >
              </b-form-input>

              <b-row>
                <b-col sm="8" md="8">
                  <p :style="{ color: '#999', marginTop: '3px', paddingLeft: '18px' }">
                    Use <a href="#" :style="{ color: '#999' }"> my current location </a>
                  </p>
                </b-col>
              </b-row>
            </b-col>

            <b-col cols="6" sm="4" offset-sm="1" lg="2" offset-lg="0">
              <b-button type="submit" size="lg" variant="pink" :style="{ width: 'inherit', height: '50px' }">Right Now</b-button>
            </b-col>
            <b-col cols="6" sm="4" offset-sm="2" lg="2" offset-lg="0">
              <b-button type="submit" size="lg" variant="outline-pink" :style="{ width: 'inherit', height: '50px' }">Long Term</b-button>
            </b-col>
          </b-row>
          
        </b-form-group>
      </b-form>

      <b-row :style="{ marginTop: '160px' }">
        <b-col>
          <b-img src="../assets/landing_where.png" :style="{ height: '120px' }" fluid/>
        </b-col>
      </b-row>

      <!-- <b-row :style="{ marginTop: '100px' }">
        <b-col>
          <h2 class="bang" :style="{ margin: '0' }"> Close To You. </h2>
          <h3> Nearest crisis accommodation services. </h3>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12" md="6">

        </b-col>
        <b-col cols="12" md="6">
          
        </b-col>
      </b-row> -->

      <b-row>
        <b-col>
          <h2 class="bang" :style="{ margin: '0' }"> Who To Call. </h2>
          <h3 :style="{ marginBottom: '32px' }"> Numbers to call if you need help. </h3>
        </b-col>
      </b-row>

      <b-row :style="{ marginTop: '16px', marginBottom: '32px' }">
        <b-col>
          <h3 class="bold">
            Entry Point
          </h3>
          <h5 class="bold sec-color">
            6496 0001 <br>
            1800 124 684
          </h5>
        </b-col>

        <b-col>
          <h3 class="bold">
            Crisis Care
          </h3>
          <h5 class="bold sec-color">
            9223 1111 <br>
            1800 199 008
          </h5>
        </b-col>
      </b-row>

    </b-container>
  </div>
</template>

<script>
export default {
  // mounted() {
  //   this.autocomplete = new google.maps.places.Autocomplete(
  //     (this.$refs.autocomplete),
  //     {
  //       types: ['(cities)'],
  //       componentRestrictions: { country: 'au' },
  //     },
  //   );
    // this.autocomplete.addListener('place_changed', () => {
    //   let place = this.autocomplete.getPlace();
    //   let ac = place.address_components;
    //   let lat = place.geometry.location.lat();
    //   let lon = place.geometry.location.lng();
    // });
// },
  name: 'index',
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#location {
  border-radius: 3px;
  box-shadow: 0px 2px 7.8px 0.2px rgba(0, 0, 0, 0.3);
  background-color: #ffffff;
  border: solid 2px #333333;
}
</style>
