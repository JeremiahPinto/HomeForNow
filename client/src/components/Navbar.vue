<template>
  <b-navbar id="navbar" fixed="top" toggleable="md" type="light" variant="white">
    <b-navbar-brand to="/">
      <img src="../assets/logo.svg" class="d-inline-block align-top" :style="{ width: '16px' }">
      HomeForNow
    </b-navbar-brand>

    <b-navbar-nav class="ml-auto">
      <b-nav-item v-b-modal.loginmodal>Service Login</b-nav-item>
      <login/>
    </b-navbar-nav>

    <!-- <b-collapse is-nav id="nav_collapse">

      Right aligned nav items
      <b-navbar-nav v-if="user" class="ml-auto">
        <b-nav-item href="#">{{ welcome }}</b-nav-item>
        <b-nav-item href="#">Logout</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav v-else class="ml-auto">
      

    </b-collapse> -->
  </b-navbar>
</template>

<script>
import loginmodal from './Modals/LoginModal';

export default {
  components: {
    login: loginmodal,
  },
  created() {
    window.addEventListener('scroll', this.navFade);
  },
  destroyed() {
    window.removeEventListener('scroll', this.navFade);
  },
  methods: {
    navFade() {
      const nav = document.querySelector('#navbar');
      if (window.scrollY <= 10) {
        nav.classList.remove('material-nav');
      } else {
        nav.classList.add('material-nav');
      }
    },
  },
};
</script>

<style scoped>
  .material-nav {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    z-index: 10;
  }
</style>
