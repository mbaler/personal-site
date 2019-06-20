<template lang="pug">
  #app
    nav#nav.navbar.is-transparent
      .navbar-brand
        a.navbar-item.logo(href="#")
          //- img(src="./assets/MBt_crop_comp.png", height="30px", width="30px")
          span
            | M
            span.rest ac&nbsp;
          span.squished
            | B
            span.rest aler
        a.navbar-burger(data-target="navMenu")
          span
          span
          span
      .navbar-menu#navMenu
        .navbar-start
        .navbar-end
          a.navbar-item(href="#") Test A
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
  .navbar-brand .logo
    font-weight: 700;
    font-size: 22px;
    line-height: 1.1;
    // text-transform: uppercase;
    font-variant: small-caps;
    transform: translateZ(0);
    outline: 0;
    box-shadow: none;
    text-decoration: none;
    user-select: none;
    color: red !important;

    @media (min-width: 768px)
      font-size: 28px;

    &:hover
      background: none;
  


  .navbar-brand .logo
    width: 190px;
    padding: 0;

    // transition: all 175ms cubic-bezier(0.4, 0, 0.2, 1.0);
    // letter-spacing: 0.025em;
    letter-spacing: 0.040em;
    animation: 5s cubic-bezier(0.4, 0, 0.2, 1.0) 1s infinite alternate-reverse lspacing;

    // &:hover
      // letter-spacing: 0.050em;
    
  @keyframes lspacing
    0%, 30%
      letter-spacing: 0.025em;
    70%, 100%
      letter-spacing: 0.040em;
  

  .navbar-brand .logo span.rest
    // transition: all 175ms cubic-bezier(0.4, 0, 0.2, 1.0), opacity 125ms cubic-bezier(0.4, 0, 0.2, 1.0);
    // font-size: 0;
    // opacity: 0;
    animation: 5s cubic-bezier(0.4, 0, 0.2, 1.0) 1s infinite alternate-reverse nameappear;
  
  @keyframes nameappear
    0%, 30%
      font-size: 0;
      opacity: 0;
    35%
      opacity: 0;
    70%, 100%
      font-size: 1em;
      opacity: 1;
  
  .navbar-brand .logo span.squished
    // margin-left: -10px;
    animation: 5s cubic-bezier(0.4, 0, 0.2, 1.0) 1s infinite alternate-reverse squishing;
  
  @keyframes squishing
    0%, 30%
      margin-left: -10px;
    70%, 100%
      margin-left: 0;
  
  // .navbar-brand .logo:hover span
    // opacity: 1;
    // font-size: 1em;



  padding: 30px;
  a 
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active 
      color: #42b983;
  @media screen and (max-width: 1024px)
    .navbar-menu
      width: 55%;
      z-index: 9999;
      position: absolute;
      right: 15px;

.bottom.footer
  padding: 2rem 1.5rem 2rem 1.5rem;
</style>
