<template>
  <div id="app">
    <b-navbar id="navbar" fixed="top" toggleable="md" type="light" variant="white">

      <b-navbar-brand href="#">
        <img src="./assets/logo.svg" class="d-inline-block align-top" style="width: 17px;">
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

    <main :style="{marginTop: '112px'}">
      <router-view></router-view>
    </main>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  // methods: {
  //   handleScroll(evt) {
  //     // Any code to be executed when the window is scrolled
  //     const nav = document.querySelector('#navbar');
  //   },
  // },
  // created() {
  //   window.addEventListener('scroll', this.handleScroll);
  // },
  // destroyed() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // },
};
</script>

<style>
#app {
  background-color: #ffffff;
  font-family: "Roboto", sans-serif;
  /*use roboto*/
  font-style: normal;
  color: #333333;
}

.sec-color {
  color: #cc0066;
}

.bang {
  font-family: "Bangers", sans-serif;
  /*use bangers*/
}

.btn-pink {
  border-radius: 3px;
  background-color: #cc0066;
  font-size: 13.2px;
  font-weight: 500;
  letter-spacing: 1px;
  color: #fff;
  border: solid 2px #cc0066;
}
.btn-pink:hover, .btn-pink:focus {
    background-color: #ff3399 !important;
    border-color: #ff3399 !important;
}

.btn-outline-pink {
  border-radius: 3px;
  background-color: #ffffff;
  border: solid 2px #cc0066;
  font-size: 13.2px;
  font-weight: 500;
  letter-spacing: 1px;
  color: #cc0066;
}
.btn-outline-pink:hover, .btn-outline-pink:focus {
    background-color: white;
    border: 2px solid #ff3399 !important;
    color:#ff3399 !important;
}

.bold {
  font-weight: bold;
}
</style>
