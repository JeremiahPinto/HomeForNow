<template>
  <b-modal  id="loginmodal"
            header-border-variant="0"
            footer-border-variant="0"
  >
    <div slot="modal-title">
      <h3 class="sec-color bang"> Service Login </h3>
    </div>

    <b-form>
      <b-form-group label="Email Address:">
        <b-form-input type="email"
                      v-model="service.email"
                      placeholder="example@example.com"
                      required
        >
        </b-form-input>
      </b-form-group>

      <b-form-group label="Password:">
        <b-form-input type="password"
                      v-model="service.password"
                      required
        >
        </b-form-input>
      </b-form-group>
  
      <b-alert  variant="danger"
                dismissible
                fade
                :show="showDismissibleAlert"
                @dismissed="showDismissibleAlert=false"
      >
        {{error}}
      </b-alert>

      <b-button 
                class="float-right"
                @click="login"
                variant="pink"
      >
        Login
      </b-button>

    </b-form>
    
    <div slot="modal-footer"/>
    
  </b-modal>
</template>

<script>
import AuthenticationService from '@/services/AuthService';

export default {
  data() {
    return {
      showDismissibleAlert: false,
      service: {
        email: '',
        password: '',
      },
      error: '',
    };
  },
  methods: {
    async login() {
      this.showDismissibleAlert = true;
      try {
        await AuthenticationService.login({
          email: this.service.email,
          password: this.service.password,
        });
        this.showDismissibleAlert = false;
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<style>
</style>