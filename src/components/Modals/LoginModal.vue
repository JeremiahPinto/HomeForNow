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
        Incorrect Login Details
      </b-alert>

      <b-button type="submit"
                class="float-right"
                @click="showDismissibleAlert=true"
                variant="pink"
      >
        Login
      </b-button>

    </b-form>
    
    <div slot="modal-footer"/>
    
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      showDismissibleAlert: false,
      service: {
        email: '',
        password: '',
      },
    };
  },
};
</script>

<style>
</style>