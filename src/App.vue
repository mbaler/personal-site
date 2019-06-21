<template lang="pug">
  #app
    nav#nav.navbar.is-transparent
      .navbar-brand
        .navbar-item.logo(href="#")
          span
            span M
            span.rest AC&nbsp;
          span.squished
            span B
            span.rest ALER
        a.navbar-burger(data-target="navMenu")
          span
          span
          span
      .navbar-menu#navMenu
        .navbar-start
        .navbar-end
          .navbar-item.has-dropdown.is-hoverable
            a.navbar-link DropTest
            .navbar-dropdown.is-boxed
              a.navbar-item Test1
              a.navbar-item Test2
              hr.navbar-divider
              a.navbar-item Test3
          .navbar-item
            router-link.rlink(to="/") Home
          .navbar-item
            router-link.rlink(to="/about") About
          .navbar-item
            a(href="#projects") Projects
          .navbar-item
            a(href="/resume_6.20.19.pdf", target="_blank") Resume
          .navbar-item
            a(href="#contact") Contact
    router-view
    footer.footer.bottom
      .content.has-text-centered.is-size-5
        p Built with my own 🙌.
</template>

<script>
  export default {
    name: "App",
    
    mounted() {
        const $navbarBurger = document.querySelector(".navbar-burger");
        const $navbarMenu = document.querySelector(".navbar-menu");

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $navbarBurger.addEventListener("click", _activeToggle);

        const mq = window.matchMedia("(max-width: 1024px)");
        _changeFunc(mq);
        mq.addListener(_changeFunc);

        function _changeFunc(mq) {
          // window is 1024 or below, so .navbar-menu items are from hamburger, floating
          // so, relevant clickable menu elements need a click trigger -> they cause a toggle on classes, hiding floating menu
          if (mq.matches) {
            const $menuItems = document.querySelectorAll(".navbar-end a.navbar-item, .navbar-end .rlink");

            $menuItems.forEach(item => {
              item.addEventListener("click", _activeToggle);
            });
          }
        }

        function _activeToggle() {
          $navbarBurger.classList.toggle("is-active");
          $navbarMenu.classList.toggle("is-active");
        }
    },
}
</script>

<style lang="sass">
html
  overflow-y: auto !important;

#app
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;

  .magic-highlight
    //////// SIMPLE
    // transition: all .2s ease-in-out;
    // box-shadow: inset 0 -0.2em 0 0 #2eec96;	
    // &:hover
    //   box-shadow: inset 0 -2em 0 0 #2eec96;

    //////// GRADIENT
    background-image: linear-gradient(120deg, #cbffb0 0%, #ff9eb1 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.25em;
    background-position: 0 96%;
    transition: background-size 0.2s ease-in-out;
    &:hover
      background-size: 100% 96%;

#nav
  padding: 30px;

  a 
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active 
      color: #42b983;

  .navbar-menu
    font-family: "Poppins";
  
  @media screen and (max-width: 1024px)
    .navbar-menu
      width: 55%;
      z-index: 9999;
      position: absolute;
      right: 15px;

  .navbar-brand .logo
    font-size: 28px;
    font-weight: bold;
    color: red;
    padding: 0;

  .navbar-brand .logo span.rest
    font-size: 18px;
    animation: 8s cubic-bezier(.57,.06,.27,.84) 1s infinite alternate-reverse nameappear;
  
    @keyframes nameappear
      0%, 30%
        font-size: 0;
        opacity: 0;
      38%
        opacity: 0;
      50%, 100%
        font-size: 18px;
        opacity: 1;
  
  .navbar-brand .logo span.squished
    margin-left: 0;
    animation: 8s cubic-bezier(.57,.06,.27,.84) 1s infinite alternate-reverse squishing;
  
    @keyframes squishing
      0%, 30%
        margin-left: -0.28em;
      50%, 100%
        margin-left: 0;

.bottom.footer
  padding: 2rem 1.5rem 2rem 1.5rem

</style>
