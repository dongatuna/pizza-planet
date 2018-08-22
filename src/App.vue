<template>
  <div id="app">
    <div class="container">
      <pp-header></pp-header>
    </div>
    <div class="container">
      <pp-menu></pp-menu>
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

export default {
  //register the above components
  components:{
    "pp-header":Header,
    "pp-footer":Footer,
    "pp-home":Home,
    "pp-menu":Menu
  }
  
}
</script>

<style>

</style>
