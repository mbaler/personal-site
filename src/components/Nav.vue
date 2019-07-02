<template lang="pug">
  nav#nav.navbar.is-transparent.is-fixed-top
    .navbar-brand
      a.navbar-item.logo(@click.prevent="scrollToTop")
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
        //- .navbar-item.has-dropdown.is-hoverable
        //-   a.navbar-link DropTest
        //-   .navbar-dropdown.is-boxed
        //-     a.navbar-item Test1
        //-     a.navbar-item Test2
        //-     hr.navbar-divider
        //-     a.navbar-item Test3
        .navbar-item
          router-link.rlink(to="/", @click.native="scrollToTop") Home
        //- .navbar-item
        //-   router-link.rlink(to="/test") Test
        .navbar-item
          router-link.rlink(to="/#about") About
        .navbar-item
          router-link.rlink(to="/#projects") Projects
        .navbar-item
          router-link.rlink(to="/#contact") Contact
        .navbar-item
          a.rlink(href="/resume.pdf", target="_blank", @click="gaSendEvent('Resume', 'Nav')") Résumé
</template>

<script>
export default {
  name: "Nav",
  
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

  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    }
  }
}
</script>

<style lang="sass" scoped>
  #nav
    background-color: #ffffff;
    padding: 3px 20px 3px 25px;
    @media screen and (max-width: 1024px)
      padding: 3px 10px 3px 15px;

    a 
      font-weight: bold;
      color: $textDarkBlue;
      &.router-link-exact-active 
        color: $redLight;
      
      &:hover
        color: $redTrue;

    .navbar-menu
      .navbar-end .navbar-item a
        font-family: "Raleway";
        font-weight: 700 !important;
        font-size: 20px;
    
      @media screen and (max-width: 1024px)
        width: 55%;
        z-index: 9999;
        position: absolute;
        right: 15px;

    .navbar-brand .logo
      font-family: "Viga";
      font-weight: 400;
      font-size: 30px;
      color: #ff0000;
      padding: 0;

      span.rest
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
    
      span.squished
        margin-left: 0;
        animation: 8s cubic-bezier(.57,.06,.27,.84) 1s infinite alternate-reverse squishing;
      
        @keyframes squishing
          0%, 30%
            margin-left: -0.28em;
          50%, 100%
            margin-left: 0;
</style>
