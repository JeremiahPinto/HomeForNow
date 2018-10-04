<template>
  <b-modal  id="emailmodal"
            header-border-variant="0"
            footer-border-variant="0"
  >

    <div slot="modal-title">
      <h3 class="sec-color"> Email to {{ name }} </h3>
    </div>

    <b-form class="text-left">
      <b-form-group label="Email To:">
        <b-form-input type="email"
                      v-model.trim="sendEmail.to"
                      placeholder="example@example.com"
                      required
        >
        </b-form-input>
      </b-form-group>

      <b-form-group label="Subject:">
        <b-form-input v-model.trim="sendEmail.subject"  spellcheck required></b-form-input>
      </b-form-group>

       <b-form-group label="Message:">
        <b-form-textarea  v-model.trim="sendEmail.message"
                          placeholder="Compose mail"
                          :rows="13"
                          spellcheck
                          no-resize>
        </b-form-textarea>
       </b-form-group>

      <b-button class="float-right"
                type="submit"
                variant="pink"
      >
        Send
      </b-button>

    </b-form>
    
    <div slot="modal-footer"/>
    
  </b-modal>
</template>

<script>
export default {
  props: ['name', 'email'],
  data() {
    return {
      sendEmail: {
        to: this.email,
        subject: '',
        message: '',
      },
    };
  },
};
</script>

<style>
</style>