<template lang="pug">
  .home
    img(src="../assets/MBt_crop.png", height="300px", width="300px")
    HelloWorld(msg="Welcome to Mac's future Vue.js App")
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
</style>
