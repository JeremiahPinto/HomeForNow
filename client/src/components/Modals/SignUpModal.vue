<template>
  <b-modal  id="signupmodal"
            header-border-variant="0"
            footer-border-variant="0"
  >
    <div slot="modal-title">
      <h2 class="sec-color bang"> Right Now </h2>
      <h5 :style="{ color: '#606060', paddingBottom: '5px'}">
        Help us find <br>
        somewhere close to you.
      </h5>
      <h6 :style="{ color: '#606060' }">
        Fill These Details To Get The <br>
        Vacancies Suited To You
      </h6>
    </div>

    <b-form>
      <b-form-group label="First Name:">
        <b-form-input type="text"
                      v-model="fname"
                      placeholder="John"
                      required
        >
        </b-form-input>
      </b-form-group>

      <b-form-group label="Last Name:">
        <b-form-input type="text"
                      v-model="lname"
                      placeholder="Doe"
                      required
        >
        </b-form-input>
      </b-form-group>

      <b-form-group label="Date of Birth:">
        <b-form-input type="date"
                      v-model="dob"
                      placeholder="John"
                      required
        >
        </b-form-input>
      </b-form-group>

      <b-row no-gutters>
        <b-col>
          <b-form-group>
            <b-form-select v-model="selected" :options="gender" required/>
          </b-form-group>
        </b-col>

        <b-col :style="{marginLeft: '15px'}">
          <b-form-group>
            <b-form-checkbox value="yes" unchecked-value="no">
              <p> Parent with Child? </p> 
            </b-form-checkbox>
          </b-form-group>
        </b-col>
      </b-row>
  
      <b-alert  variant="danger"
                dismissible
                fade
                :show="showDismissibleAlert"
                @dismissed="showDismissibleAlert=false"
      >
        Incorrect Login Details
      </b-alert>

      <div class="text-center">
        <b-button type="submit"
                  @click="showDismissibleAlert=true"
                  variant="pink"
                  :style="{ marginBottom: '10px' }"
        >
          Get Suitable Vacancies
        </b-button>
        <br>
        <b-btn v-b-toggle.collapse1 variant="link">Privacy Information</b-btn>
        <b-collapse id="collapse1">
          <b-card border-variant="0">
            <p class="text-left">
              Anglicare WA (ABN 32797454970) is collecting your personal information so accommodation 
              services can contact you about access to their services.  We may also collect personal 
              information about you for this purpose from accommodation services.
              <span class="bold">
                By providing your details you consent to receiving messages from us 
                (including via email and SMS) in connection with this purpose or in order to provide 
                you with other information about our services
              </span>
              . If you do not provide the personal information collected, we will not be able process 
              your request. Our Privacy Policy (available at 
              <router-link to="terms_of_use"> www.homefornow.org.au/terms_of_use </router-link>
              ) states how you can seek to access or correct any personal information we hold about 
              you, how to complain about a privacy breach by us and how we will deal with a privacy 
              complaint.  You can contact us at
              <a href="mailto:info@anglicarewa.org.au"> info@anglicarewa.org.au </a>
              .
            </p>
          </b-card>
        </b-collapse>
      </div>
      
    </b-form>

    <div slot="modal-footer"/>
    
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      showDismissibleAlert: false,
      selected: null,
      fname: '',
      lname: '',
      dob: '',
      gender: [
        { value: null, text: 'Gender', disabled: true },
        { value: 'Male', text: 'Male' },
        { value: 'Female', text: 'Female' },
        { value: 'Other', text: 'Other' },
      ],
    };
  },
};
</script>

<style scoped>
p {
  font-size: 14px;
}

.card-body {
  padding: 5px;
}

.btn-link {
  color: #000000c0;
}
</style>