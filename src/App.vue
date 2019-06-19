<template lang="pug">
  #app
    #nav
      router-link(to="/") Home
      | &nbsp;|&nbsp;
      router-link(to="/about") About
    router-view
    #footer.bottom Built with my own 🙌.
</template>

<style lang="sass">
#app
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
  height: 90vh;

#nav 
  padding: 30px;
  a 
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active 
      color: #42b983;

.bottom
  font-size: 24px;
  margin-top: 40px;
</style>
