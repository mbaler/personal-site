<template lang="pug">
  .hello
    h1 {{ msg }}
    br
    h3(style="font-size: 24px") 🕑 Coming Soon™
    br
    ul
      li: a(href="https://www.linkedin.com/in/macbaler/", target="_blank", rel="noopener") LinkedIn
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
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
</style>
