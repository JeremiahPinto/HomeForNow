<template>
  <b-navbar fixed="top" toggleable="md" type="light" variant="white" class="material-nav">

    <b-navbar-brand to="/">
      <img src="../assets/logo.svg" class="d-inline-block align-top" :style="{width: '17px'}">
      HomeForNow
    </b-navbar-brand>
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-collapse is-nav id="nav_collapse">

      <!-- Right aligned nav items -->
      <b-navbar-nav v-if="user" class="ml-auto">
        <b-nav-item href="#">{{ welcome }}</b-nav-item>
        <b-nav-item href="#">Logout</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav v-else class="ml-auto">
        <b-nav-item href="#">Service Login</b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
import loginmodal from './LoginModal';

export default {
  components: {
    login: loginmodal,
  },
  methods: {},
};
</script>

<style>
.material-nav {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  z-index: 10;
}
</style>
