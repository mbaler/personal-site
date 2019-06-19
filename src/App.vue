<template lang="pug">
  #app
    nav#nav.navbar.is-transparent
      .navbar-brand
        a.navbar-item(href="#")
          img(src="./assets/MBt_crop_comp.png", height="30px", width="30px")
        a.navbar-burger(data-target="navMenu")
          span
          span
          span
      .navbar-menu#navMenu
        .navbar-start
          a.navbar-item(href="#") TestLeft
          .navbar-item.has-dropdown.is-hoverable
            a.navbar-link DropTest
            .navbar-dropdown.is-boxed
              a.navbar-item Test1
              a.navbar-item Test2
              hr.navbar-divider
              a.navbar-item Test3
        .navbar-end
          .navbar-item
            router-link(to="/") Home
          .navbar-item
            router-link(to="/about") About
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
            const $menuItems = document.querySelectorAll(".navbar-menu a.navbar-item, .navbar-end .navbar-item a");

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

#nav 
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
