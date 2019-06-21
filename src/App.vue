<template lang="pug">
  #app
    Nav
    router-view
    Footer
</template>

<script>
  import Nav from "@/components/Nav.vue";
  import Footer from "@/components/Footer.vue";

  export default {
    name: "App",
    components: {
      Nav,
      Footer,
    }
}
</script>

<style lang="sass">
html
  overflow-y: auto !important;
  scroll-behavior: smooth;
  min-width: 350px !important;

#app
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;

  .magic-highlight
    //////// SIMPLE
    // transition: all .2s ease-in-out;
    // box-shadow: inset 0 -0.2em 0 0 #2eec96;	
    // &:hover
    //   box-shadow: inset 0 -2em 0 0 #2eec96;

    //////// GRADIENT
    background-image: linear-gradient(120deg, #cbffb0 0%, #ff9eb1 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.25em;
    background-position: 0 96%;
    transition: background-size 0.2s ease-in-out;
    &:hover
      background-size: 100% 96%;
</style>
