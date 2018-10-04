<template>
  <b-container fluid>
    <b-form @submit.stop.prevent="validate">
      <b-form-row>
        <b-col cols="12" md="7">
          <b-form-group label="Service Name:">
            <b-form-input v-model.trim="Service.name" required></b-form-input>
          </b-form-group>
        </b-col>

        <b-col cols="12" md="5">
          <b-form-group label="Service Type:">
            <b-form-select v-model.trim="Service.serviceType" :options="types" required/>
          </b-form-group>
        </b-col>
      </b-form-row>

      <b-form-row>
        <b-col>
          <b-form-group label="Location:" inline>
            <b-form-row>
              <b-col cols="12" md="5">
                <b-form-group description="Suburb">
                  <b-form-input v-model.trim="Service.address.suburb" required></b-form-input>
                </b-form-group>
              </b-col>

              <b-col cols="6" md="3">
                <b-form-group description="State">
                  <b-form-select v-model="Service.address.state" :options="states" required/>
                </b-form-group>
              </b-col>

              <b-col cols="6" md="4">
                <b-form-group description="Postcode">
                  <b-form-input v-model.trim="Service.address.postcode" required></b-form-input>
                </b-form-group>
              </b-col>
            </b-form-row>
          </b-form-group>
        </b-col>
      </b-form-row>

      <b-form-row>
        <b-col cols="12" md="8">
          <b-form-group label="Age Range:" inline>
            <b-form-row>
              <b-col>
                <b-form-group description="Minimum Age">
                  <b-form-select v-model="Service.ageRange.minAge" :options="ages" required/>
                </b-form-group>
              </b-col>

              <b-col>
                <b-form-group description="Maximum Age">
                  <b-form-select v-model="Service.ageRange.maxAge" :options="ages" required/>
                </b-form-group>
              </b-col>
            </b-form-row>
          </b-form-group>
        </b-col>

        <b-col cols="12" md="4">
          <b-form-group label="Maximum Stay Length:">
            <b-form-select v-model="Service.stayLength" :options="stayLength" required/>
          </b-form-group>
        </b-col>
      </b-form-row>

      <b-form-row>
        <b-col>
          <b-form-group label="Service Contact Information">
            <b-form-row>
              <b-col cols="12" md="6">
                <b-form-group description="Email">
                  <b-form-input v-model.trim="Service.contact.email" type="email" required></b-form-input>
                </b-form-group>
              </b-col>

              <b-col cols="12" md="3">
                <b-form-group description="Mobile Number (For SMS Notifications)">
                  <b-form-input v-model.trim="Service.contact.number"></b-form-input>
                </b-form-group>
              </b-col>

              <b-col cols="12" md="3">
                <b-form-group description="Landline Number (Optional)">
                  <b-form-input v-model.trim="Service.contact.landline"></b-form-input>
                </b-form-group>
              </b-col>
            </b-form-row>
          </b-form-group>
        </b-col>
      </b-form-row>

      <b-form-row>
        <b-col>
          <b-form-group label="Password">
            <b-form-row>
              <b-col cols="12" md="6">
                <b-form-group description="Pasword">
                  <b-form-input v-model.trim="Service.password" type="password" required></b-form-input>
                </b-form-group>
              </b-col>

              <b-col cols="12" md="6">
                <b-form-group description="Confirm Password">
                  <b-form-input v-model.trim="password" type="password"></b-form-input>
                </b-form-group>
              </b-col>
            </b-form-row>
          </b-form-group>
        </b-col>
      </b-form-row>

      <b-button variant="link" v-b-modal.changepasswordmodal>Change Password</b-button>
      <changepasswordmodal/>

      <b-row>
        <b-col cols="12" md="7">
          <b-form-row>
            <b-col cols="12">
              <b-form-group label="Brief Description:">
                <b-form-textarea v-model.trim="Service.description" spellcheck required></b-form-textarea>
              </b-form-group>
            </b-col>
          </b-form-row>

          <b-form-row>
            <b-col cols="12">
              <b-form-group label="About:">
                <b-form-textarea v-model.trim="Service.about" spellcheck required></b-form-textarea>
              </b-form-group>
            </b-col>
          </b-form-row>

          <b-form-row>
            <b-col cols="12">
              <b-form-group label="House Rules:">
                <b-form-textarea v-model.trim="Service.houseRules" spellcheck required></b-form-textarea>
              </b-form-group>
            </b-col>
          </b-form-row>

          <b-form-row>
            <b-col cols="12">
              <b-form-group label="Thank You Message:">
                <b-form-textarea v-model.trim="Service.thankyouMessage" spellcheck></b-form-textarea>
              </b-form-group>
            </b-col>
          </b-form-row>
        </b-col>

        <b-col cols="12" md="5">
          <b-row>
            <b-col>
              <b-form-group label="Amenities">
                <!-- <b-card>
                  <b-row v-for="amenity in amenities" :key="amenity.value" class="py-2">
                    <b-col cols="2">
                      <i class="material-icons sec-color float-right align-middle"> {{ amenity.value }} </i>
                    </b-col>

                    <b-col cols="8">
                      <h6 class="m-0 p-1"> {{ amenity.text }} </h6>
                    </b-col>

                    <b-col cols="2">
                      <input type="checkbox" value="amenity.value">
                    </b-col>
                  </b-row>
                </b-card> -->
                <b-form-checkbox-group stacked v-model="Service.amenities" :options="amenities"></b-form-checkbox-group>
              </b-form-group>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <b-form-row>
        <b-col cols="6">
          <b-form-group label="Logo:">
            <b-form-file v-model="Service.images.logo" accept="image/jpg, image/jpeg, image/png, image/bmp"></b-form-file>
          </b-form-group>

          <b-form-row>
            <b-col b-cols="12">
              <b-form-group label="Photos:">
                <b-form-file v-model="Service.images.photos" accept="image/jpg, image/jpeg, image/png, image/bmp"></b-form-file>
              </b-form-group>
            </b-col>
          </b-form-row>
        </b-col>
      </b-form-row>

      <b-button variant="pink" type="submit">Submit</b-button>
    </b-form>
    
  </b-container>
</template>

<script>
import { gmapApi } from 'vue2-google-maps';
import AdminDashService from '@/services/AdminDashService';
import ChangePasswordModal from '../Modals/ChangePasswordModal';

export default {
  components: {
    changepasswordmodal: ChangePasswordModal,
  },
  data() {
    return {
      password: '',
      passFeedback: '',
      error: {
        error: '',
        show: false,
      },
      Service: {
        name: '',
        serviceType: null,
        address: {
          suburb: '',
          state: 'WA',
          postcode: '',
          coordinates: {
            lat: 0.0,
            long: 0.0,
          },
        },
        ageRange: {
          minAge: 14,
          maxAge: 25,
        },
        stayLength: null,
        contact: {
          email: '',
          number: '',
          landline: '',
        },
        password: '',
        description: '',
        about: '',
        houseRules: '',
        thankyouMessage: '',
        amenities: [],
        images: {
          logo: null,
          photos: {},
        },
      },
      types: [
        { value: null, text: 'Type', disabled: true },
        { value: 'crisis', text: 'Crisis' },
        { value: 'transitional', text: 'Transitional' },
      ],
      states: [
        { value: null, text: 'State', disabled: true },
        { value: 'ACT', text: 'ACT' },
        { value: 'NSW', text: 'NSW' },
        { value: 'NT', text: 'NT' },
        { value: 'QLD', text: 'QLD' },
        { value: 'SA', text: 'SA' },
        { value: 'TAS', text: 'TAS' },
        { value: 'VIC', text: 'VIC' },
        { value: 'WA', text: 'WA' },
      ],
      ages: [
        { value: null, text: 'Age', disabled: true },
        { value: 14, text: '14' },
        { value: 15, text: '15' },
        { value: 16, text: '16' },
        { value: 17, text: '17' },
        { value: 18, text: '18' },
        { value: 19, text: '19' },
        { value: 20, text: '20' },
        { value: 21, text: '21' },
        { value: 22, text: '22' },
        { value: 23, text: '23' },
        { value: 24, text: '24' },
        { value: 25, text: '25' },
      ],
      stayLength: [
        { value: null, text: '(in months)', disabled: true },
        { value: '1', text: '1' },
        { value: '3', text: '3' },
        { value: '6', text: '6' },
        { value: '9', text: '9' },
        { value: '12', text: '12' },
        { value: '15', text: '15' },
        { value: '18', text: '18' },
        { value: '21', text: '21' },
        { value: '24', text: '24' },
      ],
      amenities: [
        { value: 'tv', text: 'TV' },
        { value: 'local_laundry_service', text: 'Laundry / Washer' },
        { value: 'wifi', text: 'WiFi' },
        { value: 'smoking_rooms', text: 'Smoking' },
        { value: 'ac_unit', text: 'Air-conditioning' },
        { value: 'videogame_asset', text: 'Games / Console' },
        { value: 'fitness_center', text: 'Gym' },
        { value: 'local_library', text: 'Study' },
        { value: 'local_dining', text: 'Kitchen' },
        { value: 'phone', text: 'Phone' },
        { value: 'schedule', text: 'Curfew' },
        { value: 'lock', text: 'Secure' },
        { value: 'local_florist', text: 'Outdoor / Garden' },
      ],
    };
  },
  computed: {
    google: gmapApi,
    validPassword() {
      if (this.password === '') {
        return null;
      }
      if (this.password !== this.Service.password) {
        this.passFeedback = 'Passwords do not match';
        return false;
      }
      return true;
    },
  },
  methods: {
    async getLatLng() {
      try {
        const geocode = await this.geocode((this.Service.address.suburb.concat(' ', this.Service.address.state, ', Australia', this.Service.address.postcode)));

        try {
          this.Service.address.coordinates.lat = geocode.geometry.location.lat;
          this.Service.address.coordinates.long = geocode.geometry.location.lng;
        } catch (e) {
          this.error.show = true;
          this.error.error = e;
        }
      } catch (err) {
        this.error.show = true;
        this.error.error = 'Ooops, something went wrong';
      }
    },
    async geocode(add) {
      const geocoder = new this.google.maps.Geocoder();
      return new Promise((resolve, reject) => {
        geocoder.geocode({ address: add }, (results, status) => {
          if (status === this.google.maps.GeocoderStatus.OK) {
            resolve(results[0]);
          } else {
            reject(status);
          }
        });
      });
    },
    async submit() {
      try {
        await AdminDashService.addService(this.Service);
      } catch (error) {
        this.error = error.response.error;
      }
    },
    async validate() {
      if (this.password !== this.Service.password) {
        console.log('error');
      } else {
        this.submit();
      }
    },
  },
};
</script>

<style scoped>
textarea {
  height: 10rem;
  resize: none;
}
</style>