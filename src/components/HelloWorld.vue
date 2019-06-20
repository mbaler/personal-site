<template lang="pug">
  .hello
    h1.title
      | Mac's 
      span.magic-highlight personal
      | &nbsp;site of the web...
    h3.subtitle.is-4(style="padding-top: 20px;") 🕑 Coming Soon™
    br
    a.linkedin.button.is-link.is-large(href="https://www.linkedin.com/in/macbaler/", target="_blank", rel="noopener")
      span.icon: i.fab.fa-linkedin
      span LinkedIn
</template>

<script>
export default {
  name: "HelloWorld",
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
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
  margin-bottom: 20px;
</style>
