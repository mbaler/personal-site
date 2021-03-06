<template lang="pug">
  .container#about
    h2.title.is-2.scrollio About
    h3.subtitle.is-4.scrollio 
      | Hi. I'm Mac Baler. 
      br
      | Learn 'bout me.
    .columns.aboutwrap
      .column.selftext.is-half
        .blurb1.scrollio
          span 
            | Just a&nbsp;
            span.magic-highlight.mh1 knowledge-hungry bilingual Software Engineer
            | &nbsp;floating through space-time.
          span 
            | Spent a handful of&nbsp;
            span.magic-highlight.mh1 years working in Japan
            | , garnering experience spanning full-stack; 
            | but am now back in the states,&nbsp;
            span.magic-highlight.mh1 working @ 
              span.hubspot HubSpot
              | &nbsp;in the Boston area
            | .
          span Capable, efficient, inquisitive, precise, adaptable, collaborative, trustworthy, and a&nbsp;
            span.magic-highlight.mh1 quick learner
            | , with solid interpersonal skills.
          figure.d20.scrollio-d20
            img(:data-src="require(`@/assets/d20.png`)").lazyload.scrollio
          span
            span.magic-highlight.mh1 Full-stack technical skills
            | &nbsp;result from having been thrown right into the deep end from the start. 
            | Proficiences include (but not limited to) 
            span.magic-highlight.mh1 server-side jazz
            | : Node.js, Express, REST API, Java, bit of Spring &amp; NGINX; 
            span.magic-highlight.mh1 frameworks
            | : React.js, Vue.js, &amp; Redux;&nbsp;
            span.magic-highlight.mh1 build tools
            | : Webpack, Babel, Gulp, &amp; Jenkins;&nbsp;
            span.magic-highlight.mh1 front-facing elements
            |: JavaScript (ES6+), HTML/Pug, SASS/CSS Modules, &amp; Bootstrap;&nbsp;
            span.magic-highlight.mh1 testing tools
            | : Jest, Mocha, Sinon, Jasmine, &amp; Enzyme; 
            | and&nbsp;
            span.magic-highlight.mh1 everything in between
            | : SQL, Docker, Socket.io, npm, Git/GitHub, WebRTC/MediaStream API, &amp; Firebase Realtime DB. 
          span Eager to both deepen existing proficiencies &amp; fill in the cracks with new ones!
      .column.photos.is-half
        figure.portrait.scrollio-about-portrait
          img(:data-src="require(`@/assets/portrait.jpg`)").lazyload.scrollio-about-portrait
        figure.calligraphy.scrollio.scrollio
          img.vertical(:data-src="require(`@/assets/calligraphy_vertical.gif`)", alt="米良").lazyload.scrollio
          img.horizontal(:data-src="require(`@/assets/calligraphy.gif`)", alt="米良").lazyload.scrollio
    //- .load-hidden
    .timeline.is-centered.scrollio
      header.timeline-header
        span.tag.is-medium.is-danger 1993
      .timeline-item
        .timeline-marker
        .timeline-content
          p.heading September
          p 👶🏻
      header.timeline-header
        span.tag.is-medium.is-danger ...
      .timeline-item
        .timeline-marker
        .timeline-content
          p Livin' life...
      header.timeline-header
        span.tag.is-medium.is-danger 2015
      .timeline-item
        .timeline-marker
        .timeline-content
          p.heading May
          p 🎓 Colgate University 🎉
          p.subtext Hamilton, NY
          p.subtext Double Major: Computer Science, Japanese
          p.subtext 
            | Summa Cum Laude,&nbsp;
            span.magic-highlight.mh1 Phi Beta Kappa (ΦΒΚ)
            | &nbsp;Honor Society
      .timeline-item
        .timeline-marker.is-image.is-32x32.flag
          img(:data-src="require(`@/assets/japan_flag.png`)", alt="Japanese Flag").lazyload
        .timeline-content
          p.heading July
          p
            | ✈️ Move to&nbsp;
            span.magic-highlight.mh1 Japan
            | .
          p English Teacher @ Komatsu Meihou High School (JET Program). 👨‍🏫
          p.subtext Komatsu, Ishikawa Prefecture
      header.timeline-header
        span.tag.is-medium.is-danger 2016
      .timeline-item
        .timeline-marker
        .timeline-content
          p.heading August
          p ⛩️ Move to Kyoto.
          p 
            | Software &amp; Web Engineer @&nbsp;
            span.magic-highlight.mh1 Weblio
            | .&nbsp;💻
          p.subtext Kyoto, Kyoto Prefecture
      header.timeline-header
        span.tag.is-medium.is-danger 2018
      .timeline-item
        .timeline-marker.is-image.is-32x32.flag
          img(:data-src="require(`@/assets/usa_flag.png`)", alt="USA Flag").lazyload
        .timeline-content
          p.heading June
          p ✈️ Move back to the US of A.
      .timeline-item
        .timeline-marker
        .timeline-content
          p.heading July ~
          p 👋 Reuniting w/ friends &amp; family. 👪
          p 🚄 Travel.
      header.timeline-header
        span.tag.is-medium.is-danger 2019
      .timeline-item
        .timeline-marker
        .timeline-content
          p 
            span.magic-highlight.mh1 Boston
            | &nbsp;bound. 
            span(style="vertical-align: text-bottom;").is-inline-block 👍
      .timeline-item.yourcomapny_item
        .timeline-marker
        .timeline-content
          p.heading This Fall
          .sengwrap 
            span.seng 💻 Software Engineer @ 
            span.yourcompany: em: .yourcompanyheretyping
      header.timeline-header
        span.tag.is-medium.is-danger ...
      .timeline-item
        .timeline-marker
        .timeline-content
          p ???
      .timeline-header
        span.tag.is-medium.is-danger 💀 ⚰️
    .jobtext.scrollio
      p 
        span.magic-highlight.mh1 Being a proactive software engineer
        | &nbsp;allows me to make a difference,
        br
        | as the onus is upon 
        em us 
        | as engineers to help&nbsp;
        span.magic-highlight.mh1 shape our cosmos for the better
        | .
    span.subtitle.check(style="margin-top: 25px;").scrollio Check me out!
    .resumewrap.scrollio
      a.resume.button.is-large(href="/resume.pdf", alt="Résumé", target="_blank", @click="gaSendEvent('Resume', 'Button')") Résumé
    .about-buttons.scrollio
      a.linkedin.button.is-large(href="https://www.linkedin.com/in/macbaler/", alt="LinkedIn", target="_blank", rel="noopener", @click="gaSendEvent('LinkedIn', 'Button')")
        span.icon: font-awesome-icon(:icon="['fab', 'linkedin']")
        span LinkedIn
      a.github.button.is-black.is-large(href="https://github.com/mbaler", alt="GitHub", target="_blank", rel="noopener", @click="gaSendEvent('GitHub', 'Button')")
        span.icon: font-awesome-icon(:icon="['fab', 'github']")
        span GitHub
</template>

<script>
import TypeIt from "typeit";
import Trianglify from "trianglify";

export default {
  name: "About",

  mounted() {
    this.triangles();
    this.typing();
  },
  
  methods: {
    triangles() {
      const sec2 = document.querySelector(".sec2");
      var pattern = Trianglify({
        width: sec2.clientWidth,
        height: sec2.clientHeight + 100,
        cell_size: 90,
        variance: 0.95,
        seed: "3",
        x_colors: ["#800026","#bd0026","#eb2d2f","#ff6705","#ff8505","#ff9c05","#f0529d","#a501c3","#4c02a1"],
        y_colors: ["#4d006d","#bd0026","#eb2d2f","#ff6705","#ff6705","#ff6705","#eb2d2f","#bd0026","#4d006d"],
      });
      const result = pattern.svg();
      result.setAttribute("class", "triangles");
      sec2.appendChild(result);
    },
    typing() {
      new TypeIt(".yourcompanyheretyping", {
        strings: [
          "HubSpot",
          "a company of smart, respectful, fun folks™",
          "a place that helps people™",
          // "a company that works hard & plays hard™",
          "a place with diverse humans & ideas™",
          // "the coolest most bestest company ever™",
          "HubSpot."
        ],
        breakLines: false,
        loop: false,
        startDelay: 850,
        nextStringDelay: 1500,
        waitUntilVisible: true,
        speed: 100,
        cursorChar: `<span style="color: white; font-style: normal !important; font-weight: 400;">|</span>`
      }).go();
    }
  }
}
</script>

<style lang="sass" scoped>
  #about
    h2
      font-size: 48px;
      line-height: 42px;
    h3
      margin-left: 2px;
      margin-bottom: 16px !important;
      font-size: 24px;
    h2, h3, p
      color: #fff;
      text-shadow: $textShadow;

    .aboutwrap
      display: flex;
      
      margin: 16px 0 40px 0;
      padding-top: 40px;
      @media screen and (max-width: 1024px)
        flex-direction: column-reverse;
        padding-top: 0;
        margin-top: 15px;
    
      .selftext
        margin-top: -30px;
        @media screen and (max-width: 1024px)
          margin-top: 0px;
        font-size: 20px;

        .blurb1
          font-size: 16px;
          line-height: 23px;
          text-shadow: 0px 1.5px 4px #000000;
          margin: auto;
          color: white;
          @media screen and (min-width: 1025px)
            width: 92%
          
          &> span
            display: inline-block;
            padding: 6px 0;

          .hubspot
            color: #ffb42a;
            font-weight: bold;

          .d20
            height: 130px;
            margin-top: 10px;
            img
              height: 130px;

      .photos
        @media screen and (min-width: 1025px)
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: -60px;
        @media screen and (max-width: 1024px)
          flex-direction: column;

        figure
          display: inline-block;
          @media screen and (max-width: 1024px)
            &.portrait
              min-width: 82vw;
              min-height: 42vh;
            &.calligraphy
              min-width: 80vw;
              min-height: 23vh;

        .portrait
          @media screen and (min-width: 1025px)
            float: left;
          img
            @media screen and (max-width: 1024px)
              width: 82vw;
            border-radius: 50%;
            width: 350px;
            box-shadow: 0px 7px 17px 2px rgba(0, 0, 0, 0.5);
            transition: transform 0.3s ease-in-out;

            &:hover
              transform: scale(1.1);

        .calligraphy
          margin-left: 40px;
          height: 400px;
          width: auto;
          @media screen and (min-width: 1025px)
            float: right;

          .horizontal
            display: none;
          
          img
            @media screen and (max-width: 1024px)
              width: 80vw !important;
            height: 400px;
            width: auto;
          
          @media screen and (max-width: 1024px)
            margin-left: 10px;
            height: auto;

            .horizontal
              display: block;
            .vertical
              display: none;
            img
              height: auto;
              width: 100%;

    .timeline
      text-align: left;
      margin: 60px 0;
      @media screen and (min-width: 1025px)
        margin-top: 140px;

      .tag
        font-family: "Viga";
        font-weight: 400;
        pointer-events: none;
        line-height: 20px;
        background-color: $redLight !important;

      .timeline-item
        padding-bottom: 1.5em !important;
        font-size: 18px;
        
        &::before
          background-color: #c1004f !important;

        &.yourcomapny_item
          @media screen and (max-width: 1024px)
            height: 23vh;
        
        .subtext
          font-size: 14px;
        
        .heading
          font-weight: 400;

      .timeline-marker
        background-color: $blueLight !important;
        border-color: $blueLight !important;

      .flag
        height: 36px;
        width: 36px;
        background: transparent !important;
        border: none !important;

      
      .sengwrap
        text-shadow: $textShadow;
        height: 30px;
        @media screen and (max-width: 1024px)
          display: inline;

        .seng
          vertical-align: middle;
          color: white;
          @media screen and (min-width: 1025px)
            display: inline-block;

        .yourcompany
          @media screen and (min-width: 1025px)
            display: inline-block;
          position: relative;
          top: 4%;

          height: 24px;
          line-height: 24px;

          padding-left: 5px;
          font-size: 20px;
          font-weight: 400;
          @media screen and (max-width: 1024px)
            font-size: 18px;
            padding-left: 0
          em
            color: #37ffe1;                     
          
          .yourcompanyheretyping
            @media screen and (max-width: 1024px)
              display: inline;
            .ti-container
              background-size: 100% 0.30em;
              background-position: 0 100%;
              transition: background-size 0.2s ease-in-out;
              &:hover
                background-size: 100% 98%;

    .jobtext
      margin: 75px 0;
      font-size: 20px;

    .about-buttons
      a
        margin: 10px 10px;

        @media screen and (max-width: 1024px)
          font-size: 1.30em !important;

      .linkedin
        color: #fff;
        background-color: #165ce2;
        transition: all 0.25s ease-in-out;
        border-color: #165ce2;

        &:hover
          background-color: #fff;
          color: #165ce2 !important;
      
      .github
        transition: all 0.25s ease-in-out;

        &:hover
          background-color: #fff;
          color: #000 !important;
          border-color: #000;

    .check
      color: #fff;
      font-size: 32px;
      text-shadow: $textShadow;

    .resumewrap
      margin: 45px 0 45px 0;
      
      a.resume.button
        font-size: 2.5em;
        text-shadow: $textShadow;
        background-color: $greenLight !important;
        color: #fff;
        box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.5);
        transition: all 0.25s ease-in-out;
        padding-top: 0.2em;

        position: relative
        outline: none;
        border: none;

        &:hover
          text-shadow: none;
          background: #fff !important;
          color: $greenLight !important;
          border: 1px solid $greenLight;
          border-radius: 4px;

        &::before
          content: "";
          z-index: 2;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          border: 4px solid $greenLightTransparent;
          border-radius: 4px;
          transform-origin: center;
          transform: scale(1);
          animation: 2s cubic-bezier(.57,.06,.27,.84) 0.75s infinite pulse;

          @keyframes pulse
            0%
              border-color: $greenLightTransparent;
              transform: scale(1);
            50%
              border-color:  $greenLight;
            85%
              opacity: 0;
            100%
              transform-origin: center;
              transform: scale(1.23, 1.55);
              opacity: 0;
</style>
<style lang="sass">
  .yourcompanyheretyping .ti-container
    background-image: $magicHighlight;
    background-repeat: no-repeat;
    background-size: 100% 0.30em;
    background-position: 0 100%;
    transition: background-size 0.2s ease-in-out;
    &:hover
      background-size: 100% 98%;
</style>
