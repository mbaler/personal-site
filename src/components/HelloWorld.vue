<template lang="pug">
  .hello
    h1.title
      | Mac's 
      span.magic-highlight personal
      | &nbsp;site of the web...
    h3.subtitle.is-4(style="padding-top: 20px;") 🕑 Coming Soon™
    br
    #typingwrap(style="font-size:22px;")
    br
    a.linkedin.button.is-link.is-large(href="https://www.linkedin.com/in/macbaler/", target="_blank", rel="noopener")
      span.icon: i.fab.fa-linkedin
      span LinkedIn
</template>

<script>
import TypeIt from "typeit";

export default {
  name: "HelloWorld",

  mounted() {
    new TypeIt("#typingwrap", {
      strings: ["Howdy there folks...", "Hold your horses..."],
      breakLines: false,
      loop: true,
      loopDelay: 5000,
    }).go();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
#typingwrap
  font-family: "Poppins";

h1.title
  font-family: "Roboto";

h3
  margin: 40px 0 0;

ul
  list-style-type: none;
  padding: 0;

li
  display: inline-block;
  margin: 0 10px;

a
  color: #42b983;

.linkedin
  margin: 20px 0;
</style>
