<template lang="pug">
  .main-wrapper
    //- parallax(:speedFactor="0.2", :direction="'up'")
    //- img(src="@/assets/sakewall.jpg").macpar
    section.section.sec1
      Splash
    section.section.sec2
      About
    section.section.sec3
      Projects
</template>

<script>
// @ is an alias to /src
import Splash from "@/components/Splash.vue";
import Projects from "@/components/Projects.vue";
import About from "@/components/About.vue";

export default {
  name: "home",

  components: {
    Splash,
    Projects,
    About,
  },
}
</script>

<style lang="sass">
  .main-wrapper
    .Masthead
      position: absolute;
    .Masthead__image
      position: static !important;
    .macpar
      // position: absolute;
      // top: 0;
      // bottom: 0;
      // right: 0;
      // left: 0;
      width: 100%;
      height: 101%;
      // z-index: -5;
    // background-image: url("../assets/sakewall.jpg");
    // background-size: contain;
    // height: 1900px;
    // background-attachment: fixed;
    // background-position: center;
    // background-repeat: no-repeat;
    // background-size: cover;
    // background-size: cover;
    // background-size: 1920px 1280px;

    margin: auto;
    padding-top: 5.0em;
    text-align: center;
    z-index: 1;
    background-color: white;
    width: 100%;

    section:first-of-type
      padding-top: 0;
    
    .sec1
      height: 92vh;

      .container
        height: 100%;
        display: flex;
        flex-direction: column;
    
    .sec2
      background-color: #e16f00;
    
    .sec3
      background-color: #dfe6ff;
</style>
