<template lang="pug">
  .main-wrapper
    section.section.sec1
      .container
        figure(style="height: 320px; width: 320px; margin: auto;")
          img(src="../assets/MBt_crop_comp.png", height="320px", width="320px")
        HelloWorld
    section.section.sec2
      .container#about
        h2.title.is-2 About
          h3.subtitle.is-4 subtitle
    section.section.sec3#projects
      .container
        h2.title.is-2 Projects
          h3.subtitle.is-4 subtitle
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
}
</script>

<style lang="sass">
  .main-wrapper
    margin: auto;
    text-align: center;
    z-index: 2;
    background-color: white;
    width: 100%;
</style>
