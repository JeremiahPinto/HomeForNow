<template>
  <b-container>

    <b-row :style="{ marginBottom: '17vh' }">
      <b-col cols="12" md="8">
        <h1 class="bang black fluid-h1">
          Let's find a <br>
          <span class="sec-color"> home for now. </span>
        </h1>
        <h4 class="fluid-h4">
          Youth Accommodation <br>
          Options in Perth, Western Australia
        </h4>
      </b-col>      
    </b-row>

    <b-form @submit="event.preventDefault()" id="locationForm">
      <!-- <b-form-group :invalid-feedback="invalidFeedback"
                    :valid-feedback="validFeedback"
                    :state="state"
      >  use below for now until proper validation is used-->
      <b-form-group>
        <b-row>
          <b-col cols="12" lg="8">
            <b-form-input id="location"
                          v-model="location"
                          ref="autocomplete"
                          size="lg"
                          type="text"
                          placeholder="Where are you now - e.g. Subiaco"
                          autocomplete="on"
                          required
            >
            </b-form-input>

            <b-row>
              <b-col sm="8" md="8">
                <p :style="{ color: '#999', marginTop: '3px', paddingLeft: '18px' }">
                  Use <a href="#" :style="{ color: '#999' }" @click="geolocation()"> my current location </a>
                </p>
              </b-col>
            </b-row>
          </b-col>

          <b-col cols="6" sm="4" offset-sm="1" lg="2" offset-lg="0">
            <b-button type="submit" size="lg" variant="pink" :style="{ width: 'inherit', height: '50px' }" v-b-modal.signupmodal>Right Now</b-button>
          </b-col>
          <b-col cols="6" sm="4" offset-sm="2" lg="2" offset-lg="0">
            <b-button type="submit" size="lg" variant="outline-pink" :style="{ width: 'inherit', height: '50px' }" v-b-modal.signupmodal>Long Term</b-button>
          </b-col>
        </b-row>
        <signup/>
      </b-form-group>
    </b-form>

    <b-row :style="{ marginTop: '7em' }">
      <b-col cols="12" style="display: flex;">
        <h1 class="bang black fluid-h1" :style="{ zIndex: '2' }">
          Where  <span class="alt-black"> to go </span> <br>
          Who <span class="alt-black"> to call </span>
        </h1>

        <div style="display:flex; margin: -1em 0 0 -1.22rem;">
          <h1 class="bang sec-color" :style="{ fontSize: 'calc(var(--fluid-h1) * 2.5)'}"> & </h1>
        </div>
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
        <h2 class="bang black" :style="{ margin: '0' }"> Who To Call. </h2>
        <h3 class="alt-black mb-4"> Numbers to call if you need help. </h3>
      </b-col>
    </b-row>

    <b-row class="mt-2 mb-4">
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
</template>

<script>
import signupmodal from './Modals/SignUpModal';

export default {
  components: {
    signup: signupmodal,
  },
  data() {
    return {
      location: '',
      user: {
        fname: '',
        lname: '',
        dob: '',
        gender: '',
        child: '',
        lat: '',
        long: '',
        los: '',
      },
    };
  },
  methods: {
    geolocation: () => {
      const oldLocValue = document.getElementById('location').value;
      this.location = 'Finding your location ...';

      if (!navigator.geolocation) {
        this.error = 'Geolocation is not supported by your browser';
        document.getElementById('location').value = oldLocValue;
      }

      function success(position) {
        this.user.lat = position.coords.latitude;
        this.user.long = position.coords.longitude;
        this.location = this.user.lat.concat(', ').concat(this.user.long);

        // const geocoder = new google.maps.Geocoder;
        // geocoder.geocode( { 'address': lat + ', ' + lng }, (results, status) => {
        //   if (status == 'OK')
        //   {
        //     let locality, state, country;
        //     const addressComponents = results[0].address_components;

        //     for (i = 0; i < addressComponents.length; ++i)
        //     {
        //       if (!country && addressComponents[i].types[0] == 'country')
        //         country = addressComponents[i].long_name;
        //       else if (!state && addressComponents[i].types[0] == 'administrative_area_level_1')
        //         state = addressComponents[i].short_name;
        //       else if (!locality && addressComponents[i].types[0] == 'locality')
        //         locality = addressComponents[i].long_name;
        //     }
        //     document.getElementById('location').value = locality + ' ' + state + ', ' + country;
        //   }
        //   else
        //   {
        //     console.log('Geocode was not successful for the following reason: ' + status);
        //   }
        // });
      }

      function error() {
        this.error = 'Unable to retrieve your location';
        document.getElementById('location').value = oldLocValue;
      }

      navigator.geolocation.getCurrentPosition(success, error);
    },
  },
};
</script>

<style scoped>
#location {
  border-radius: 3px;
  box-shadow: 0px 2px 7.8px 0.2px rgba(0, 0, 0, 0.3);
  background-color: var(--white);
  border: solid 2px var(--black);
}
</style>
