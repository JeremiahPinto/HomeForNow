<template>
  <div id="app">
    <navigation/>
    <main :style="{ margin: '112px 0 30px' }">
      <router-view/>
    </main>
    <foot/>
  </div>
</template>

<script>
import axios from 'axios';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default {
  name: 'app',
  components: {
    navigation: Navbar,
    foot: Footer,
  },
  methods: {},
  created() {
    axios.interceptors.response.use(undefined, err =>
      new Promise(() => {
        // eslint-disable-next-line
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
        // if you ever get an unauthorized, logout the user
          this.$store.dispatch('AUTH_LOGOUT');
        // you can also redirect to /login if needed !
        }
        throw err;
      }));
  },
};
</script>

<style>
:root { 
  --fluid-h1: calc(40px + 3vmin);
  --fluid-h4: calc(14px + 1vmin);

  --pink: #cc0066;
  --pink-hover: #ff3399;
  --white: #ffffff;
  --black: #000000;
  --alt-black: #333333;

  /* font-size: 14px; */
}
#app {
  background-color: var(--white);
  font-family: "Roboto", sans-serif;
  /*use roboto*/
  font-style: normal;
  color: var(--black);
  
}

.sec-color {
  color: var(--pink);
}
.alt-black {
  color: var(--alt-black);
}
.black {
  color: var(--black);
}

.bang {
  font-family: "Bangers", cursive;
  /*use bangers*/
}

.fluid-h1 {
  font-size: var(--fluid-h1);
}

.fluid-h4 {
  font-size: var(--fluid-h4);
}

.btn-pink {
  border-radius: 3px;
  background-color: var(--pink);
  font-size: 13.2px;
  font-weight: 500;
  letter-spacing: 1px;
  color: var(--white);
  border: solid 2px var(--pink);
}
.btn-pink:hover,
.btn-pink:focus {
  background-color: var(--pink-hover) !important;
  border-color: var(--pink-hover) !important;
}

.btn-outline-pink {
  border-radius: 3px;
  background-color: var(--white);
  border: solid 2px var(--pink);
  font-size: 13.2px;
  font-weight: 500;
  letter-spacing: 1px;
  color: var(--pink);
}
.btn-outline-pink:hover,
.btn-outline-pink:focus {
  background-color: var(--white);
  border: 2px solid var(--pink-hover) !important;
  color: var(--pink-hover) !important;
}

.bold {
  font-weight: bold;
}

.modal-body {
  padding: 0 1em;
}
.modal-footer {
  padding-top: 0;
}

/* google autocomplete drop down */
.pac-icon {
  width: 0;
  background-image: none;
}
.pac-item {
  font-family: 'Roboto', sans-serif;
  color: #999999;
}
</style>
