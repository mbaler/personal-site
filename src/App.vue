<template lang="pug">
  #app
    template(v-if="loading")
      span.loading LOADING...
    template(v-else)
      Nav
      router-view
      Footer
</template>

<script>
  import Nav from "@/components/Nav.vue";
  import Footer from "@/components/Footer.vue";

  import FontFaceObserver from "fontfaceobserver";
  import ScrollReveal from "scrollreveal";

  export default {
    name: "App",
    components: {
      Nav,
      Footer,
    },

    data() {
      return {
        loading: false,
      };
    },

    mounted() {
      this.fontLoad();
      this.scrollio();
      this.overscrollFix();
    },

    methods: {
      fontLoad() {
        // load fonts progressively
        const fontA = new FontFaceObserver("Raleway");
        const fontB = new FontFaceObserver("Viga");
        const fontC = new FontFaceObserver("Josefin Sans");
        const fontD = new FontFaceObserver("K2D");

        // prioritized, ordered load
        _prioritized();

        function _prioritized() {
          fontA.load().then(() => {
            fontB.load().then(() => {
              fontC.load().then(() => {
                fontD.load().then(() => {
                  // console.log("All fonts loaded.");
                });
              });
            });
          });
        }
      },

      scrollio() {
        // defaults
        ScrollReveal({
          delay: 0,
          distance: "50px",
          duration: 1000,
          interval: 400,
        });

        ScrollReveal().reveal(".scrollio");

        // targeted
        ScrollReveal().reveal(".scrollio-hand", {
          origin: "top",
          distance: "10px",
          delay: 1500,
        });
        ScrollReveal().reveal(".scrollio-about-portrait", {
          origin: "top",
        });
        ScrollReveal().reveal(".scrollio.proj", {
          interval: 160,
          delay: 125,
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
    font-family: "K2D", Helvetica, Arial, sans-serif;
    font-weight: 400;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    flex-direction: column;

    section:not(:first-of-type) .container
      // &:not(:first-child)
      padding-top: 30px;
      padding-bottom: 30px;

    .magic-highlight,
      //////// SIMPLE
      // transition: all .2s ease-in-out;
      // box-shadow: inset 0 -0.2em 0 0 #2eec96;	
      // &:hover
      //   box-shadow: inset 0 -2em 0 0 #2eec96;

      //////// GRADIENT
      background-repeat: no-repeat;
      background-size: 100% 0.35em;
      background-position: 0 92%;
      transition: background-size 0.2s ease-in-out;
      &:hover
        background-size: 100% 100%;
    .mh1
      background-image: $magicHighlight;
    .mh2
      background-image: $magicHighlight2;
    
    h1, h2, h3, h4, h5, h6
      font-family: "Raleway";
      font-weight: 700;
      font-variant: small-caps;
</style>
