<template lang="pug">
  #app
    Nav
    router-view
    Footer
</template>

<script>
  import Nav from "@/components/Nav.vue";
  import Footer from "@/components/Footer.vue";

  import ScrollReveal from 'scrollreveal'

  export default {
    name: "App",
    components: {
      Nav,
      Footer,
    },

    mounted() {
      // this.scrollio();
      this.overscrollFix();
    },

    methods: {
      scrollio() {
        // TODO: need to use less instances -- is lagging stuff up

        // defaults
        ScrollReveal({
          delay: 100,
          distance: "50px",
          duration: 1000,
          interval: 400,
        });

        ScrollReveal().reveal(".scrollio");

        // presets
        ScrollReveal().reveal(".scrollio-reset", {
          reset: true,
        });
        ScrollReveal().reveal(".scrollio-immediate", {
          delay: 0,
          interval: 200,
        });
        ScrollReveal().reveal(".scrollio-stagger", {
          interval: 400,  
        });
        ScrollReveal().reveal(".scrollio-delayed", {
          delay: 200,
        });
        ScrollReveal().reveal(".scrollio-top", {
          origin: "top",
        });

        // targeted
        ScrollReveal().reveal(".scrollio.proj", {
          interval: 160,
          delay: 250,
        });
        ScrollReveal().reveal(".scrollio-about", {
          interval: 160,
          delay: 100,
        });
        ScrollReveal().reveal(".scrollio-hand", {
          origin: "top",
          distance: "10px",
          delay: 1500,
        });
        ScrollReveal().reveal(".scrollio-about-portrait", {
          origin: "top",
          disatance: "70px",
          delay: 300,
        });
        ScrollReveal().reveal(".scrollio-callig", {
          distance: "70px",
          delay: 300,
        });
      },

      overscrollFix() {
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
}
</script>

<style lang="sass">
  html
    overscroll-behavior: none;
    overflow-y: auto !important;
    scroll-behavior: smooth;
    min-width: 350px !important

  html.sr .load-hidden
    visibility: hidden;

  // prevent broken image on lazy loads
  img.lazyload:not([src])
    visibility: hidden;

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
      background-repeat: no-repeat;
      background-size: 100% 0.25em;
      background-position: 0 96%;
      transition: background-size 0.2s ease-in-out;
      &:hover
        background-size: 100% 105%;
</style>
