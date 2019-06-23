<template lang="pug">
    .container#about
        h2.title.is-2 About
        h3.subtitle.is-4 Learn 'bout me.
        .columns
            .column.selftext.is-half
                h3.title.is-3 Mac Baler
                .blurb1
                    p
                        | Just a knowledge-hungry bilingual Software Engineer floating through space-time.
                        br
                        | Spent a handful of years working in Japan, but am now back in the states, looking for work in the Boston area.
            .column.portrait.is-half
                figure
                    img(src="@/assets/portrait.jpg")
                figure.calligraphy
                    img(src="@/assets/calligraphy1.gif")
        br
        .timeline.is-centered
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
                    img(src="@/assets/japan_flag.png", alt="Japanese Flag")
                .timeline-content
                    p.heading July
                    p 
                        | ✈️ Move to Japan
                        //- img(src="@/assets/japan_flag.png", alt="Japanese Flag").jflag
                    p English Teacher @ Komatsu Meihou High School (JET Program) 👨‍🏫
                    p.is-size-7 Komatsu, Ishikawa Prefecture
            header.timeline-header
                span.tag.is-medium.is-danger 2016
            .timeline-item
                .timeline-marker
                .timeline-content
                    p.heading August
                    p ⛩️ Move to Kyoto
                    p 💻 Software &amp; Web Engineer @ Weblio
                    p.is-size-7 Kyoto, Kyoto Prefecture
            header.timeline-header
                span.tag.is-medium.is-danger 2018
            .timeline-item
                .timeline-marker.is-image.is-32x32.flag
                    img(src="@/assets/usa_flag.png", alt="Japanese Flag")
                .timeline-content
                    p.heading June
                    p ✈️ Move back to the US of A
            .timeline-item
                .timeline-marker
                .timeline-content
                    p.heading July ~
                    p 👋 Reuniting with Friends &amp; Family 👪
                    p 🚄 Travel
            header.timeline-header
                span.tag.is-medium.is-danger 2019
            .timeline-item
                .timeline-marker
                .timeline-content
                    p Boston bound 
                        span(style="vertical-align: text-bottom;").is-inline-block 👍
            .timeline-item
                .timeline-marker
                .timeline-content
                    p.heading This Fall
                    p 
                        | 💻 Software Engineer @ 
                        em: strong(style="color: #fff") &lt;YOUR COMPANY HERE&gt;
            .timeline-item
                .timeline-marker
                .timeline-content
                    p ???
            header.timeline-header
                span.tag.is-medium.is-danger ...
            .timeline-item
                .timeline-marker
                .timeline-content
                    p ???
            .timeline-header
                span.tag.is-medium.is-danger 💀⚰️
        br
        .jobtext
            p Looking for a job that allows me to make a difference,
                br
                | as the onus is upon 
                em us 
                | as engineers to help shape our cosmos for the better.
        br
        h3.subtitle.is-3(style="margin-top: 25px;") Check me out!
        .resumewrap
            a.resume.button.is-large(href="/resume.pdf", alt="Resume", target="_blank") Resume
        .about-buttons
            a.linkedin.button.is-link.is-large(href="https://www.linkedin.com/in/macbaler/", alt="LinkedIn", target="_blank", rel="noopener")
                span.icon: i.fab.fa-linkedin
                span LinkedIn
            a.github.button.is-black.is-large(href="https://github.com/mbaler", alt="GitHub", target="_blank", rel="noopener")
                span.icon: i.fab.fa-github
                span GitHub
</template>

<script>
    export default {
        name: "About",
    }
</script>

<style lang="sass" scoped>
    #about
        h2, h3, p
            color: #fff;
        
        .selftext
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 20px;

            .blurb1
                width: 82%

        .portrait
            img
                border-radius: 50%;
                width: 350px;

            .calligraphy
                // background-color: #fff;
                // width: 50%

        .timeline
            text-align: left;

            .timeline-item
                padding-bottom: 1.5em !important;

            .flag
                height: 36px;
                width: 36px;
                background: transparent !important;
                border: none !important;

        .about-buttons
            a
                margin: 10px 10px;

                @media screen and (max-width: 1024px)
                    font-size: 1.30em !important;

            .linkedin
                // position: relative;
                // z-index: 1;
                transition: all 0.25s ease-in-out;
                // margin-top: 20px;

                &:hover
                    background-color: #fff;
                    color: blue !important;
            
            .github
                transition: all 0.25s ease-in-out;

                &:hover
                    background-color: #fff;
                    color: #000 !important;
        
        .jobtext
            margin-top: 35px;
            font-size: 18px;

        .resumewrap
            margin: 25px 0 45px 0;
            
            .resume
                font-size: 2em;
                background-color: #34af3c;
                border-color: #34af3c;
                color: #fff;
                box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.5);
                transition: all 0.25s ease-in-out;

                &:hover
                    background-color: #fff;
                    border-color: #fff;
                    color: #34af3c !important;
</style>
