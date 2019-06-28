<template lang="pug">
  .main-wrapper
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
    margin: auto;
    padding-top: 3.5em;
    text-align: center;
    z-index: 1;
    background-color: white;
    width: 100%;

    section:first-of-type
      padding-top: 0;
    
    .sec1
      height: 93vh;
      background-color: #ffffff;
      background-image: url("../assets/circuit.svg");
      // clip-path: polygon(0 0,  100% 0,  100% calc(100% - 5vw),  0 100%);
      // margin-bottom: -5vw;

      .container
        height: 100%;
        display: flex;
        flex-direction: column;
    
    .sec2
      position: relative;
      clip-path: polygon(0 0,  100% 0,  100% 100%,  0 calc(100% - 5vw));
      // margin-bottom: -5vw;

      svg.triangles
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        height: 100%;
        width: 100%;
    
    .sec3
      margin-top: -5vw;
      background-color: #521200;
      background-image: url("../assets/clouds.svg");
</style>
