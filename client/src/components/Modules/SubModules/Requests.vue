<template>
  <b-card>
    <b-row align-v="center" class="text-md-center" no-gutters>
      <b-col cols="6" order="2" md="2" order-md="1" >
        <h4 class="fluid-h4 m-md-0"> {{ Request.gender }} </h4>
      </b-col>

      <b-col cols="12" order="4" md="3" order-md="2">
        <b-row no-gutters>
          <b-col cols="12">
            <b-button variant="link" v-b-modal.emailmodal> {{ Request.contact.email }} </b-button>
            <emailmodal :name="Request.name" :email="Request.contact.email"/>
          </b-col>

          <b-col v-if="isMobile" cols="12">
            <b-button variant="link" v-b-modal.smsmodal> {{ Request.contact.number }} </b-button>
            <smsmodal :name="Request.name" :number="sendValidNum"/>
          </b-col>
          <b-col v-else cols="12">
            <p> {{ Request.contact.number }} </p>
          </b-col>
        </b-row>
      </b-col>

      <b-col cols="12" order="1" md="3" order-md="3">
        <h4 class="fluid-h4 m-md-0"> {{ Request.name }} </h4>
      </b-col>

      <b-col cols="6" order="3" md="1" order-md="4">
        <h4 class="fluid-h4 m-md-0 text-right text-md-center"> {{ Request.age }} </h4>
      </b-col>

      <b-col cols="12" order="5" md="3" order-md="5">
        <b-row no-gutters align-v="center">
          <b-col cols="6" md="12" class="mb-md-2">
            <slot name="contacted"></slot>
          </b-col>

          <b-col cols="6" md="12" class="text-center">
            <b-button variant="outline-pink"
                      v-b-modal.notesmodal
                      :style="{ width: '97.75px' }"
            >
              Notes
            </b-button>
            <notesmodal :name="Request.name">
              <b-form slot="notes">      
                <slot name="notes"></slot>
              </b-form>
            </notesmodal>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import EmailModal from '../../Modals/EmailModal';
import SMSModal from '../../Modals/SMSModal';
import NotesModal from '../../Modals/NotesModal';

export default {
  props: ['Request'],
  components: {
    emailmodal: EmailModal,
    smsmodal: SMSModal,
    notesmodal: NotesModal,
  },
  computed: {
    isMobile() {
      const num = this.Request.contact.number.substring(0, 2);
      if (num !== '04') {
        return false;
      }
      return true;
    },
    sendValidNum() {
      const num = this.Request.contact.number;
      return '61'.concat(num.substring(1, num.length));
    },
  },
};
</script>

<style>
.btn-link {
  color: #676767;
  padding-left: 0;
  padding-right: 0;
}
.btn-link:hover {
  color: var(--pink);
}
div.custom-control.custom-checkbox.custom-control-inline {
  margin-right: 0;
}
</style>
