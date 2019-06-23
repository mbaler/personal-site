<template lang="pug">
  .main-wrapper
    section.section.sec1
      .container
        .imageoutside
          figure.inner
            img.splash(src="../assets/circled.png")
        HelloWorld
    section.section.sec2
        About
    section.section.sec3
      Projects
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Projects from "@/components/Projects.vue";
import About from "@/components/About.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    Projects,
    About
  },

  mounted() {
    this.logo3D();

    // prevent no image boxshadow flash on mobile
    const splashImage = document.querySelector("img.splash");

    setTimeout(() => {
      splashImage.style.boxShadow = "0 0 0 0 rgba(0, 0, 0, 0), 10px 20px 4px 1px #ff000082 inset";
    }, 1000);
    
  },

  methods: {
    logo3D() {
      const container = document.querySelector(".imageoutside");
      const inner = document.querySelector("figure.inner");
      const refreshRate = 10;
      let counter = 0;
      const strength_x = 5.5;
      const strength_y = 2.0;

      const mouse = {
        // Track the mouse position relative to the center of the container.
        _x: container.offsetLeft + Math.floor(container.offsetWidth / 2),
        _y: container.offsetTop + Math.floor(container.offsetHeight / 2),
        x: 0,
        y: 0,
        updatePosition: function(event) {
          const e = event || window.event;
          this.x = e.clientX - this._x;
          this.y = (e.clientY - this._y) * -1;
        },
      };

      container.onmouseenter = (event) => _update(event);
      container.onmouseleave = () => inner.style = "";
      container.onmousemove = (event) => _isTimeToUpdate() ? _update(event) : null;


      function _isTimeToUpdate() {
        return counter++ % refreshRate === 0;
      }

      function _update(event) {
        mouse.updatePosition(event);
        _updateTransformStyle(
          (mouse.y / inner.offsetHeight / 2).toFixed(2),
          (mouse.x / inner.offsetWidth / 2).toFixed(2)
        );
      }

      function _updateTransformStyle(x, y) {
        x *= strength_x;
        y *= strength_y;
        const style = `rotateX(${x}deg) rotateY(${y}deg)`;

        inner.style.transform = style;
        inner.style.webkitTransform = style;
      }
    }
  }
}
</script>

<style lang="sass">
  .main-wrapper
    margin: auto;
    padding-top: 5.0em;
    text-align: center;
    z-index: 1;
    background-color: white;
    width: 100%;

    section:first-of-type
      padding-top: 0;
    
    .sec2
      background-color: #ce6600;
    
    .sec3
      background-color: #ccd8ff;

    .imageoutside
      padding: 60px 0 40px 0;
      perspective: 30px;

      figure
        @media screen and (min-width: 1025px)
          height: 362px;
          width: 362px;
        @media screen and (max-width: 1024px)
          height: 250px;
          width: 250px;
        transition: transform 0.5s;


        margin: 10px auto;

        img.splash
          border-radius: 50%;

          transform: perspective(1px) translateZ(0);
          // box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 10px 20px 4px 1px #ff000082 inset;
          transition-duration: 0.3s;
          transition-property: transform, box-shadow;
          &:hover
            transform: scale(1.1);
            box-shadow: 0px 2px 20px 1px rgba(0, 0, 0, 0.35), 10px 20px 4px 1px #ff000082 inset !important;


</style>
