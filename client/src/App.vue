<template>
  <div id="app">
    <navigation/>
    <main :style="{marginTop: '112px'}">
      <router-view/>
    </main>
    <foot/>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default {
  name: 'app',
  components: {
    navigation: Navbar,
    foot: Footer,
  },
  methods: {},
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
.btn-pink:hover,
.btn-pink:focus {
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
.btn-outline-pink:hover,
.btn-outline-pink:focus {
  background-color: white;
  border: 2px solid #ff3399 !important;
  color: #ff3399 !important;
}

.bold {
  font-weight: bold;
}

.modal-body {
  padding: 0 16px;
}
.modal-footer {
  padding-top: 0;
}
</style>
