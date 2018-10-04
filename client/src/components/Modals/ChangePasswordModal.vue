<template>
  <b-modal  id="changepasswordmodal"
            ref="modal"
            header-border-variant="0"
            footer-border-variant="0"
  >
    <div slot="modal-title">
      <h3 class="sec-color bang"> Change Password </h3>
    </div>

    <!-- <b-form @submit.stop.prevent="login"> -->
    <b-form>
      <b-form-group label="Old Password:">
        <b-form-input v-model="oldPass"
                      type="password"
                      :state="validateOld"
                      aria-describedby="inputOldPassFeedback"
        ></b-form-input>
        <b-form-invalid-feedback id="inputOldPassFeedback">
          {{ oldPassFeedback }}
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group label="New Password:">
        <b-form-input v-model="newPass"
                      type="password"
                      :state="validateNew"
                      aria-describedby="inputNewPassError inputNewPassSuccess"
        ></b-form-input>
        <b-form-invalid-feedback id="inputNewPassError">
          {{ newPassError }}
        </b-form-invalid-feedback>
        <b-form-valid-feedback id="inputNewPassSuccess">
          {{ newPassSuccess }}
        </b-form-valid-feedback>
      </b-form-group>
      
      <b-form-group label="Confirm Password:">
        <b-form-input v-model="confirmPass"
                      type="password"
                      :state="validateConfirm"
                      aria-describedby="inputConfirmFeedback"
        ></b-form-input>
        <b-form-invalid-feedback id="inputConfirmFeedback">
          {{ confirmPassFeedback }}
        </b-form-invalid-feedback>
      </b-form-group>

      <b-alert  variant="danger"
                dismissible
                fade
                :show="showDismissibleAlert"
                @dismissed="showDismissibleAlert=false"
      >
        {{error}}
      </b-alert>

      <b-button class="float-right"
                type="submit"
                variant="pink"
      >
        Confirm
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
      oldPass: '',
      newPass: '',
      confirmPass: '',
      oldPassFeedback: '',
      newPassError: '',
      newPassSuccess: '',
      confirmPassFeedback: '',
      error: '',
    };
  },
  computed: {
    validateNew() {
      if (this.newPass === '') {
        this.newPassError = '';
        this.newPassSucces = '';
        return null;
      }
      if (this.newPass.length <= 6 && this.newPass.length >= 1) {
        this.newPassError = 'Password is too short';
        this.newPassSucces = '';
        return false;
      }
      this.newPassError = '';
      this.newPassSuccess = 'Password is strong';
      return true;
    },
    validateConfirm() {
      if (this.confirmPass === '') {
        return null;
      }
      if (this.newPass !== this.confirmPass) {
        this.confirmPassFeedback = 'Passwords do not match';
        return false;
      }
      return true;
    },
  },
  // methods: {
  //   async
  // },
};
</script>

<style>
</style>