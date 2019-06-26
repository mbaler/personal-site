<template lang="pug">
    .container#about
        h2.title.is-2.scrollio-about About
        h3.subtitle.is-4.scrollio-about Learn 'bout me.
        .columns.aboutwrap
            .column.selftext.is-half
                h3.title.is-3.scrollio-stagger Mac Baler
                .blurb1.scrollio-stagger
                    span Just a knowledge-hungry bilingual Software Engineer floating through space-time.
                    span Spent a handful of years working in Japan, but am now back in the states, looking for work in the Boston area.
                    span Curious, precise, adaptable, communicative, collaborative, and reliable.
                figure.d20.scrollio-d20
                    img(:data-src="require(`@/assets/d20.png`)").lazyload.scrollio
            .column.photos.is-half
                figure.portrait.scrollio-about-portrait
                    img(:data-src="require(`@/assets/portrait.jpg`)").lazyload.scrollio-about-portrait
                figure.calligraphy.scrollio-callig
                    img.vertical(:data-src="require(`@/assets/calligraphy_vertical.gif`)", alt="米良").lazyload.scrollio-callig
                    img.horizontal(:data-src="require(`@/assets/calligraphy.gif`)", alt="米良").lazyload.scrollio-reset
        .timeline.is-centered.scrollio-delayed.load-hidden
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
                    p.is-size-7 Hamilton, NY
                    p.is-size-7 Double Major: Computer Science, Japanese
                    p.is-size-7 Summa Cum Laude, Phi Beta Kappa (ΦΒΚ) Honor Society
            .timeline-item
                .timeline-marker.is-image.is-32x32.flag
                    img(:data-src="require(`@/assets/japan_flag.png`)", alt="Japanese Flag").lazyload
                .timeline-content
                    p.heading July
                    p 
                        | ✈️ Move to Japan
                    p English Teacher @ Komatsu Meihou High School (JET Program) 👨‍🏫
                    p.is-size-7 Komatsu, Ishikawa Prefecture
            header.timeline-header
                span.tag.is-medium.is-danger 2016
            .timeline-item
                .timeline-marker
                .timeline-content
                    p.heading August
                    p ⛩️ Move to Kyoto
                    p Software &amp; Web Engineer @ Weblio 💻
                    p.is-size-7 Kyoto, Kyoto Prefecture
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
                    p 👋 Reuniting with friends/family 👪
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
            p Looking for a job that allows me to make a difference,
                br
                | as the onus is upon 
                em us 
                | as engineers to help shape our cosmos for the better.
        h3.subtitle.is-3(style="margin-top: 25px;").scrollio Check me out!
        .resumewrap.scrollio
            a.resume.button.is-large(href="/resume.pdf", alt="Resume", target="_blank") Resume
        .about-buttons.scrollio
            a.linkedin.button.is-link.is-large(href="https://www.linkedin.com/in/macbaler/", alt="LinkedIn", target="_blank", rel="noopener")
                span.icon: font-awesome-icon(:icon="['fab', 'linkedin']")
                span LinkedIn
            a.github.button.is-black.is-large(href="https://github.com/mbaler", alt="GitHub", target="_blank", rel="noopener")
                span.icon: font-awesome-icon(:icon="['fab', 'github']")
                span GitHub
</template>

<script>
    import TypeIt from "typeit";

    export default {
        name: "About",

        mounted() {
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
            cursorChar: "<span style='color: white; font-style: normal !important; font-weight: 400;'>|</span>"
          }).go();
        }
    }
</script>

<style lang="sass" scoped>
    #about
        h2, h3, p
            color: #fff;

        .aboutwrap
            display: flex;
            
            margin: 25px 0 40px 0;
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
                    text-shadow: black 0px 0px 6px;
                    margin: auto;
                    color: white;
                    @media screen and (min-width: 1025px)
                        width: 82%
                    
                    span
                        display: inline-block;
                        padding: 10px 0;

                .d20
                    height: 160px;
                    margin-top: 40px;
                    img
                        height: 160px;

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

                .portrait
                    @media screen and (min-width: 1025px)
                        float: left;
                    img
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
            font-family: "Roboto";

            text-align: left;
            margin: 60px 0;
            @media screen and (min-width: 1025px)
                margin-top: 140px;

            .tag
                pointer-events: none;
                background-color: #bd0000 !important;

            .timeline-item
                padding-bottom: 1.5em !important;
                
                &::before
                    background-color: #c1004f !important;

                &.yourcomapny_item
                    @media screen and (max-width: 1024px)
                        height: 180px;

            .timeline-marker
                background-color: #8fffd4 !important;
                border-color: #8fffd4 !important;

            .flag
                height: 36px;
                width: 36px;
                background: transparent !important;
                border: none !important;

            
            .sengwrap
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
                    font-weight: 500;
                    @media screen and (max-width: 1024px)
                        font-size: 18px;
                        padding-left: 0
                    em
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
                transition: all 0.25s ease-in-out;

                &:hover
                    background-color: #fff;
                    color: blue !important;
            
            .github
                transition: all 0.25s ease-in-out;

                &:hover
                    background-color: #fff;
                    color: #000 !important;

        .resumewrap
            margin: 35px 0 45px 0;
            
            a.resume.button
                font-size: 2em;
                background-color: #34af3c !important;
                color: #fff;
                box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.5);
                transition: all 0.25s ease-in-out;

                position: relative
                outline: none;
                border: none;

                &:hover
                    background-color: #fff !important;
                    color: #34af3c !important;

                &::before
                    content: "";
                    z-index: -1;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    border: 4px solid #33af3b7a;
                    border-radius: 4px;
                    transform-origin: center;
                    transform: scale(1);
                    animation: 2s cubic-bezier(.57,.06,.27,.84) 0.75s infinite pulse;

                    @keyframes pulse
                        0%
                            border-color: #33af3b7a;
                        70%
                            border-color:  #33af3b;
                        85%
                            opacity: 0;
                        100%
                            transform-origin: center;
                            transform: scale(1.25, 1.5);
                            opacity: 0;
</style>
