<template>
  <b-modal  id="contactmodal"
            header-border-variant="0"
            footer-border-variant="0"
            size="sm"
  >

    <b-container class="p-0 text-center">
      <b-row no-gutters>
        <b-col cols="12">
          <b-img src="../../assets/placeholder_image.png" fluid></b-img>
        </b-col>
      </b-row>

      <b-form>
        <b-row no-gutters>
          <b-col cols="12">
            <b-form-group label="What's the best number to get you on?">
              <b-form-input type="number"
                            v-model.number.trim="youth.number"
                            placeholder="0412345678"
              >
              </b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row no-gutters>
          <b-col cols="12">
            <label> -- and/or -- </label>
          </b-col>
        </b-row>

        <b-row no-gutters>
          <b-col cols="12">
            <b-form-group label="Email">
              <b-form-input type="email"
                            v-model.trim="youth.email"
                            placeholder="john.doe@example.com"
              >
              </b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-alert  variant="danger"
                  dismissible
                  fade
                  :show="showDismissibleAlert"
                  @dismissed="showDismissibleAlert=false"
        >
        At Least One Field Required
        </b-alert>

        <b-row no-gutters>
          <b-col cols="12" offset-md="3" md="6">
            <b-button :style="{ width: 'inherit' }"
                      variant="pink"
                      v-b-modal.thankmodal
            >
              Submit
            </b-button>
            <thank/>
          </b-col>
        </b-row>
      </b-form>
    </b-container>

    <div slot="modal-footer"/>
    
  </b-modal>
</template>

<script>
import thankmodal from './ThankModal';

export default {
  components: {
    thank: thankmodal,
  },
  data() {
    return {
      showDismissibleAlert: false,
      youth: {
        number: '',
        email: '',
      },
    };
  },
};
</script>

<style>
</style>