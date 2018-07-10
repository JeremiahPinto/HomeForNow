<template>
  <b-modal  id="thankmodal"
            header-border-variant="0"
            footer-border-variant="0"
            size="sm"
  >

    <b-img src="../../assets/placeholder_image.png" fluid></b-img>

    <h4> Thank You </h4>

    <p> {{ message }} </p>
    
    <div slot="modal-footer"/>
    
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      showDismissibleAlert: false,
      message: ' Thank You',
    };
  },
};
</script>

<style>
</style>