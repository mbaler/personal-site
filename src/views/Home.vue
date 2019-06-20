<template lang="pug">
  .home
    figure(style="height: 320px; width: 320px; margin: auto;")
      img(src="../assets/MBt_crop_comp.png", height="320px", width="320px")
    HelloWorld
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
  .home
    margin: auto;
    text-align: center;
</style>
