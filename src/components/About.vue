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
                    span Just a knowledge-hungry bilingual Software Engineer floating through space-time.
                    span 
                        | Spent a handful of years working in Japan, garnering experience spanning full-stack; 
                        | but am now back in the states, looking for work in the 
                        span.magic-highlight.mh1 Boston
                        | &nbsp;area.
                    span Capable, efficient, inquisitive, precise, adaptable, collaborative, trustworthy, and a quick learner, with solid interpersonal skills.
                    figure.d20.scrollio-d20
                        img(:data-src="require(`@/assets/d20.png`)").lazyload.scrollio
                    span
                        | Technical skills result from having been thrown right into the deep end for two years. 
                        | Proficiences include (but not limited to) 
                        | server-side jazz: Node.js, Express, REST API, Java/Spring, Perl, &amp; NGINX; 
                        | frameworks: React.js, Vue.js, &amp; Redux; build tools: Webpack, Babel, &amp; Jenkins; 
                        | front-facing elements: JS (ES6+), HTML/Pug, SASS/CSS Modules, &amp; Bootstrap; 
                        | testing tools: Jest, Mocha, Sinon, &amp; Enzyme; 
                        | and everything in between: SQL, Docker, Socket.io, npm, Git/GitHub, WebRTC/MediaStream API, &amp; Firebase Realtime DB. 
                    span I’m eager to both deepen existing proficiencies &amp; fill in the cracks with new ones!
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
                    p.subtext Summa Cum Laude, Phi Beta Kappa (ΦΒΚ) Honor Society
            .timeline-item
                .timeline-marker.is-image.is-32x32.flag
                    img(:data-src="require(`@/assets/japan_flag.png`)", alt="Japanese Flag").lazyload
                .timeline-content
                    p.heading July
                    p ✈️ Move to Japan
                    p English Teacher @ Komatsu Meihou High School (JET Program) 👨‍🏫
                    p.subtext Komatsu, Ishikawa Prefecture
            header.timeline-header
                span.tag.is-medium.is-danger 2016
            .timeline-item
                .timeline-marker
                .timeline-content
                    p.heading August
                    p ⛩️ Move to Kyoto
                    p Software &amp; Web Engineer @ Weblio 💻
                    p.subtext Kyoto, Kyoto Prefecture
            header.timeline-header
                span.tag.is-medium.is-danger 2018
            .timeline-item
                .timeline-marker.is-image.is-32x32.flag
                    img(:data-src="require(`@/assets/usa_flag.png`)", alt="USA Flag").lazyload
                .timeline-content
                    p.heading June
                    p ✈️ Move back to the US of A
            .timeline-item
                .timeline-marker
                .timeline-content
                    p.heading July ~
                    p 👋 Reuniting w/ friends &amp; family 👪
                    p 🚄 Travel
            header.timeline-header
                span.tag.is-medium.is-danger 2019
            .timeline-item
                .timeline-marker
                .timeline-content
                    p Boston bound 
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
            p Looking for a software engineering job that allows me to make a difference,
                br
                | as the onus is upon 
                em us 
                | as engineers to help shape our cosmos for the better.
        span.subtitle.check(style="margin-top: 25px;").scrollio Check me out!
        .resumewrap.scrollio
            a.resume.button.is-large(href="/resume.pdf", alt="Résumé", target="_blank") Résumé
        .about-buttons.scrollio
            a.linkedin.button.is-large(href="https://www.linkedin.com/in/macbaler/", alt="LinkedIn", target="_blank", rel="noopener")
                span.icon: font-awesome-icon(:icon="['fab', 'linkedin']")
                span LinkedIn
            a.github.button.is-black.is-large(href="https://github.com/mbaler", alt="GitHub", target="_blank", rel="noopener")
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
                    // y_colors: ["#800026","#bd0026","#e31a1c","#fc4e2a","#fd8d3c","#feb24c","#fed976","#ffeda0","#ffffcc"],
                    // y_colors: ["#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],
                    // x_colors: ["#800026","#bd0026","#e31a1c","#fc4e2a","#fd8d3c","#feb24c","#fd8d3c","#feb24c","#800026"], //"YlOrRd",
                    // y_colors: ["#d73027","#f46d43","#f19943","#fdae61","#4310c4","#74add1","#4575b4","#225ead","#0038c9"], //"RdYlBu",

                });
                const result = pattern.svg();
                result.setAttribute("class", "triangles");
                sec2.appendChild(result);
            },
            typing() {
                new TypeIt(".yourcompanyheretyping", {
                  strings: [
                      "Your Company Here™",
                      "a company of smart, respectful, fun folks™",
                      "a place that helps people™",
                      "a company that works hard & plays hard™",
                      "a place with diverse humans & ideas™",
                      "the coolest most bestest company ever™",
                  ],
                  breakLines: false,
                  loop: true,
                  nextStringDelay: 2500,
                  waitUntilVisible: true,
                  speed: 135,
                  cursorChar: `<span style="color: white; font-style: normal !important; font-weight: 400;">|</span>`
                }).go();
            }
        }
    }
</script>

<style lang="sass" scoped>
    #about
        @media screen and (max-width: 1024px)
            padding-top: 5px !important;
            // h3
            //     width: 60vw;
            //     margin: -10px auto 0 auto;
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
                // background: linear-gradient(180deg, rgba(255,68,0,1) 0%, rgba(189,0,0,1) 50%);

            .timeline-item
                padding-bottom: 1.5em !important;
                font-size: 18px;
                
                &::before
                    background-color: #c1004f !important;
                    // background-color: $redLight !important;

                &.yourcomapny_item
                    @media screen and (max-width: 1024px)
                        height: 23vh;
                
                .subtext
                    font-size: 14px;
                
                .heading
                    // font-size: 12px;
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
                        // color: $blueLight;
                        color: #52feff;
                
                    @media screen and (max-width: 1024px)
                        .yourcompanyheretyping
                            display: inline;

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
            margin: 35px 0 45px 0;
            
            a.resume.button
                font-size: 2em;
                background-color: $greenLight !important;
                // background: linear-gradient(180deg, rgba(52,175,60,1) 0%, rgba(0,156,10,1) 50%) !important;
                color: #fff;
                box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.5);
                transition: all 0.25s ease-in-out;

                position: relative
                outline: none;
                border: none;

                &:hover
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
                    border: 4px solid $greenLightTransparent; // 
                    border-radius: 4px;
                    transform-origin: center;
                    transform: scale(1);
                    animation: 2s cubic-bezier(.57,.06,.27,.84) 0.75s infinite pulse;

                    @keyframes pulse
                        0%
                            border-color: $greenLightTransparent; // 
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
