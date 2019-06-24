<template lang="pug">
  .hello
    h1.title
      | Mac's 
      span.magic-highlight personal
      | &nbsp;site of the web...
    h3.subtitle.is-4(style="padding-top: 20px;") 🕑 Coming Soon™
    #typingwrap
      .typingcontainer1
    router-link(to="/#about")#scrollbutton
      i.fa-3x.fas.fa-hand-point-down
      //- i.fa-3x.fas.fa-angle-down
      //- i.fa-3x.fas.fa-arrow-down

</template>

<script>
import TypeIt from "typeit";

export default {
  name: "HelloWorld",

  mounted() {
    new TypeIt(".typingcontainer1", {
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
.hello
  position: absolute;
  bottom: 15px;
  left: 0;
  right: 0;
  margin: auto;
  flex: 1;

  @media screen and (min-width: 1025px)
    margin-top: 30px;
  @media screen and (max-width: 1024px)
    margin-top: 5px;
    bottom: 13px;

  #typingwrap
    height: 80px;
    padding: 0px 0 10px 0;
    display: flex;
    justify-content: center;
    align-items: center; 

    .typingcontainer1
      font-family: "Poppins";
      font-size: 22px;

    span
      display: inline-block;
      vertical-align: middle;
  

  #scrollbutton
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 50px;
    @media screen and (max-width: 1024px)
      bottom: 0;
    cursor: pointer;
    left: 50%;
    width: 3rem;
    height: 3rem;
    margin-left: -1.5rem;
    margin-top: 80px;
    color: #ff771e !important;
    border: none;
    padding: .5rem;
    animation: scrollButton 1s cubic-bezier(.175,.885,.32,1.4) infinite alternate;

    &:hover
      color: #ff1e00 !important;

    &:after
      content: "";
      display: block;
      position: absolute;
      // top: 0;
      // left: 0;
      width: 150%;
      height: 150%;
      background-color: rgba(255, 0, 198, 0.11); // rgba(77,171,247,.1);
      border-radius: 50%;
      transform: scale(0);
      transition: transform .2s cubic-bezier(.175,.885,.32,1.4);

    &:hover:after
      transform: scale(1);

    @keyframes scrollButton
      0%
        -webkit-transform: translateY(0);
        transform: translateY(0)

      to
        -webkit-transform: translateY(-20%);
        transform: translateY(-20%)


h1.title
  font-family: "Roboto";

h3
  margin: 40px 0 0;
</style>
