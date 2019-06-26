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
