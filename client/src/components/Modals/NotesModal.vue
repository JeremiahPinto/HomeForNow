<template>
  <b-modal  id="notesmodal"
            header-border-variant="0"
            footer-border-variant="0"
  >

    <div slot="modal-title">
      <h3 class="sec-color text-left" v-if="nameS"> {{ name }}' Request </h3>
      <h3 class="sec-color text-left" v-else> {{ name }}'s Request </h3>
    </div>

    <h5 class="mb-4 text-left"> Applied on {{ time }} </h5>

    <slot name="notes"></slot>
    
    <div slot="modal-footer"/>
    
  </b-modal>
</template>

<script>
export default {
  props: ['name', 'time'],
  computed: {
    nameS() {
      const name = this.name;
      if (name.charAt(name.length - 1) === 's') {
        return true;
      }
      return false;
    },
  },
};
</script>

<style>
</style>