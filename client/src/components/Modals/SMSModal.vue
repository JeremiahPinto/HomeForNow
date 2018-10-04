<template>
  <b-modal  id="smsmodal"
            header-border-variant="0"
            footer-border-variant="0"
  >

    <div slot="modal-title">
      <h3 class="sec-color"> Text {{ name }} </h3>
    </div>

    <b-form class="text-left">
      <b-form-group label="Mobile Number:">
        <b-form-input type="tel"
                      v-model.trim="sendSMS.to"
                      placeholder="61412345678"
                      required
        >
        </b-form-input>
      </b-form-group>

       <b-form-group label="Message:">
        <b-form-textarea  v-model.trim="sendSMS.message"
                          placeholder="Enter text message"
                          :rows="7"
                          spellcheck
                          maxlength="160"
                          no-resize>
        </b-form-textarea>
       </b-form-group>

      <b-button class="float-right"
                type="submit"
                variant="pink"
      >
        Send Text
      </b-button>

    </b-form>
    
    <div slot="modal-footer"/>
    
  </b-modal>
</template>

<script>
export default {
  props: ['name', 'number'],
  data() {
    return {
      sendSMS: {
        to: this.number,
        message: '',
      },
    };
  },
};
</script>

<style>
</style>