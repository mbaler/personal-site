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
    },

    mounted() {
      // ensure correct top and bottom backgrounds for mobile overscrolling
      const topColor = "white";
      const bottomColor = "#2f0000";
      let ticking = false;

      window.addEventListener("scroll", _checkScroll, { passive: true });
      window.addEventListener("resize", _checkScroll, { passive: true });

      _checkScroll();


      function _checkScroll() {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const scrollHeight = document.body.scrollHeight;
            const innerHeight = window.innerHeight;
            if (scrollHeight === innerHeight) {
              _setBgColor(bottomColor);
            } else {
              _setBgColor(innerHeight - scrollHeight + 2 * window.scrollY < 0 ? topColor : bottomColor);
            }
            ticking = false;
          });
          ticking = true;
        }
      }

      function _setBgColor(color) {
        document.documentElement.style.background = color;
      }
    }
}
</script>

<style lang="sass">
  html
    overscroll-behavior: none;
    overflow-y: auto !important;
    scroll-behavior: smooth;
    min-width: 350px !important

    // custom cursor
    // cursor: url("./assets/custom-cursor1.png") 25 25, auto; // custom image
    // a:hover
      // cursor: url("./assets/custom-cursor2.png") 25 25, auto; // larger

  // medium zoom
  .medium-zoom-image--opened, .medium-zoom-overlay
    z-index: 9999999999999;

  .medium-zoom-image--opened
    padding: 6px;

  #app
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    flex-direction: column;

    section:not(:first-of-type) .container
      // &:not(:first-child)
      padding-top: 30px;
      padding-bottom: 30px;

    .magic-highlight
      //////// SIMPLE
      // transition: all .2s ease-in-out;
      // box-shadow: inset 0 -0.2em 0 0 #2eec96;	
      // &:hover
      //   box-shadow: inset 0 -2em 0 0 #2eec96;

      //////// GRADIENT
      background-image: linear-gradient(180deg, rgba(255,252,0,0.5690651260504201) 0%, rgba(255,205,0,0.6250875350140056) 100%);
      // background-image: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(249,255,0,1) 0%);
      background-repeat: no-repeat;
      background-size: 100% 0.25em;
      background-position: 0 96%;
      transition: background-size 0.2s ease-in-out;
      &:hover
        background-size: 100% 105%;
</style>
