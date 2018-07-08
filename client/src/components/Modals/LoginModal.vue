<template>
  <b-modal  id="loginmodal"
            ref="modal"
            header-border-variant="0"
            footer-border-variant="0"
  >
    <div slot="modal-title">
      <h3 class="sec-color bang"> Service Login </h3>
    </div>

    <b-form @submit.stop.prevent="login">
      <b-form-group label="Email Address:">
        <b-form-input type="email"
                      v-model="email"
                      placeholder="example@example.com"
                      required
        >
        </b-form-input>
      </b-form-group>

      <b-form-group label="Password:">
        <b-form-input type="password"
                      v-model="password"
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
                type=submit
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
      email: '',
      password: '',
      error: '',
    };
  },
  methods: {
    async login() {
      try {
        const email = this.email;
        const password = this.password;
        await this.$store.dispatch('AUTH_REQUEST', { email, password });
        this.showDismissibleAlert = false;
        this.$refs.modal.hide();
        this.$router.push('service');
      } catch (error) {
        this.showDismissibleAlert = true;
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<style>
</style>