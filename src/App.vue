<template>
  <div id="app">
    <div class="container">
      <pp-header></pp-header>
    </div>
    <div class="container">
      <pp-admin></pp-admin>
    </div>
    <div class="container">
      <pp-footer></pp-footer>
    </div>
   
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Home from "./components/Home.vue";
import Menu from "./components/Menu.vue";
import Admin from "./components/Admin.vue";

export default {
  //register the above components
  components:{
    "pp-header":Header,
    "pp-footer":Footer,
    "pp-home":Home,
    "pp-menu":Menu,
    "pp-admin":Admin
  }
  
}
</script>

<style>

</style>
