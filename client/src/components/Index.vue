<template>
  <b-container>
    <b-alert id="alert" :show="error.show" variant="danger" dismissible >
      <h4 class="alert-heading">ERROR!!!</h4>
      {{ error.error }}
    </b-alert>

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

    <b-form v-on:submit.prevent id="locationForm">
      <b-form-group>
        <b-row>
          <b-col cols="12" lg="8">
            <GmapAutocomplete id="location"
                              class="form-control form-control-lg"
                              v-model="location"
                              @place_changed="setPlace"
                              :options="mapOptions"
                              placeholder="Where are you now - e.g. Subiaco"
                              selectFirstOnEnter
                              autofocus
                              required
            >
            </GmapAutocomplete>

            <b-row>
              <b-col sm="8" md="8">
                <p class="pl-4 mt-1" :style="{ color: '#999' }">
                  Use <a  href="#"
                          :style="{ color: '#999' }"
                          @click="geolocation"
                  >
                    my current location
                  </a>
                </p>
              </b-col>
            </b-row>
          </b-col>

          <b-col cols="6" sm="4" offset-sm="1" lg="2" offset-lg="0">
            <b-button variant="pink"
                      :style="{ width: 'inherit', height: '50px' }"
                      v-b-modal.signupmodal
                      @click="title='Right Now'; request.los='crisis'"
            >
              Right Now
            </b-button>
          </b-col>
          <b-col cols="6" sm="4" offset-sm="2" lg="2" offset-lg="0">
            <b-button variant="outline-pink"
                      :style="{ width: 'inherit', height: '50px' }"
                      v-b-modal.signupmodal
                      @click="title='Long Term'; request.los='transitional';"
            >
              Long Term
            </b-button>
          </b-col>
        </b-row>

        <signup @register="submitRequest" :title="title"/>

      </b-form-group>
    </b-form>

    <b-row :style="{ marginTop: '7em' }">
      <b-col cols="12" class="d-inline-flex">
        <h1 class="bang black fluid-h1" :style="{ zIndex: '2' }">
          Where  <span class="alt-black"> to go </span> <br>
          Who <span class="alt-black"> to call </span>
        </h1>

        <h1 class="bang sec-color"
            :style="{ fontSize: 'calc(var(--fluid-h1) * 2.555)', margin: '-1.1rem 0 0 -1.2rem'}"
        >
          &
        </h1>
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
        <h2 class="bang black m-0">
          Who To Call.
        </h2>
        <h3 class="alt-black mb-4">
          Numbers to call if you need help.
        </h3>
      </b-col>
    </b-row>

    <contact/>
  </b-container>
</template>

<script>
import RequestService from '@/services/RequestService';

import { gmapApi } from 'vue2-google-maps';
import signupmodal from './Modals/SignUpModal';
import Contact from './Modules/ContactInfo';

export default {
  components: {
    signup: signupmodal,
    contact: Contact,
  },
  data() {
    return {
      location: '',
      mapOptions: {
        types: ['(cities)'],
        componentRestrictions: { country: 'au' },
      },
      request: {
        lat: 0.0,
        long: 0.0,
        los: '',
      },
      title: '',
      error: {
        error: '',
        show: false,
      },
    };
  },
  computed: {
    google: gmapApi,
  },
  methods: {
    async submitRequest(value) {
      const newRequest = {
        name: {
          firstName: value.fname,
          lastName: value.lname,
        },
        gender: value.gender,
        dob: value.dob,
        child: value.child,
        lengthOfStay: this.request.los,
        lat: this.request.lat,
        long: this.request.long,
      };
      try {
        const services = (await RequestService.search(newRequest)).data;
        console.log(services);
      } catch (error) {
        this.error = error;
        this.error.show = true;
      }
    },

    async geolocation() {
      const oldLocValue = this.location;
      this.location = 'Finding your location ...';

      try {
        const position = await this.getCurrentPosition();

        this.request.lat = position.coords.latitude;
        this.request.long = position.coords.longitude;

        try {
          const geocode = await this.geocode(('').concat(this.request.lat).concat(', ').concat(this.request.long));

          try {
            const value = await this.getGeoVal(geocode.address_components);
            this.location = value;
          } catch (e) {
            this.error.show = true;
            this.error.error = e;
            this.location = oldLocValue;
          }
        } catch (err) {
          this.error.show = true;
          this.error.error = 'Ooops, something went wrong';
          this.location = oldLocValue;
        }
      } catch (error) {
        this.error.show = true;
        if (error.code === 1) {
          this.error.error = 'Permission to access location has been denied';
        }
        if (error.code === 2) {
          this.error.error = 'Unable to retrieve current location';
        }
        if (error.code === 3) {
          this.error.error = 'Access to current location has timed out';
        }
        this.location = oldLocValue;
      }
    },
    async getCurrentPosition(options) {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
      });
    },
    async geocode(add) {
      const geocoder = new this.google.maps.Geocoder; // eslint-disable-line
      return new Promise((resolve, reject) => {
        geocoder.geocode({ address: add }, (results, status) => { // eslint-disable-line
          if (status === this.google.maps.GeocoderStatus.OK) {
            resolve(results[0]);
          } else {
            reject(status);
          }
        });
      });
    },
    async getGeoVal(addressComponents) {
      let locality;
      let state;
      let country;
      return new Promise((resolve, reject) => {
        addressComponents.forEach((element) => {
          if (!country && element.types[0] === 'country') {
            country = element.long_name;
          }
          if (!state && element.types[0] === 'administrative_area_level_1') {
            state = element.short_name;
          }
          if (!locality && element.types[0] === 'locality') {
            locality = element.long_name;
          }
        });
        if (country && state && locality) {
          resolve(locality.concat(', ').concat(state).concat(', ').concat(country));
        } else {
          reject('Unable to retrieve location');
        }
      });
    },
    async setPlace(place) {
      this.request.lat = await place.geometry.location.lat();
      this.request.long = await place.geometry.location.lng();
    },
  },
};
</script>

<style scoped>
#location {
  height: 50px;
  font-size: 17px;
  border-radius: 3px;
  box-shadow: 0px 2px 7.8px 0.2px rgba(0, 0, 0, 0.3);
  background-color: var(--white);
  border: solid 2px var(--black);
}

#alert {
  margin: 10px;
  position: fixed;
  top: 60px;
  right: 0;
  z-index: 10;
}
</style>
