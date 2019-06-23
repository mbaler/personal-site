<template lang="pug">
    .container#projects
        h2.title.is-2 Projects
        h3.subtitle.is-4 Some little ditties of mine.
        .showcase-wrapper.columns.is-centered.is-variable.is-7
            .proj.proj1.column.is-one-third
                .box
                    a.projhead(href="https://github.com/mbaler/webrtc-kun", alt="WebRTC Device Checker", target="_blank", rel="noopener")
                        figure.iconpreview
                            img(src="../assets/wrtcdc/webrtclogocropW.png")
                        h4.title.is-5 WebRTC Device Checker
                    figure.screenshot
                        img(src="../assets/wrtcdc/ss.png", data-zoomable)
                    p.description.smidgeUp {{ wrtcdcDesc }}
                    .projlinks
                        a(href="https://eikaiwa.weblio.jp/device_checker?bandwidth", alt="Live Example", target="_blank", rel="noopener")
                            span.icon.is-large.has-text-link: i.fas.fa-external-link-alt.fa-2x
                        a(href="https://github.com/mbaler/webrtc-kun", alt="GitHub Repo", target="_blank", rel="noopener", style="display: inline-flex;")
                            span.icon.is-large: i.fab.fa-github.fa-3x
                    span.tech Tech Used:
                    .toolwrap
                        | {{ wrtcdcTech }}
            .proj.proj2.column.is-one-third
                .box
                    a.projhead(href="https://github.com/mbaler/Medium-Code-Highlighter", alt="Medium Code Highlighter - Chrome Extension", target="_blank", rel="noopener")
                        figure.iconpreview
                            img(src="../assets/mch/mchicon.png")
                        h4.title.is-5 Medium Code Highlighter
                    figure.screenshot
                        img(src="../assets/mch/promo_gif.gif", data-zoomable)
                    p.description {{ mchDesc }}
                    .projlinks(style="margin-left: -10px;")
                        a(href="https://chrome.google.com/webstore/detail/medium-code-highlighter/apdaagmhepellbjjbnaljaocodjjjjfd", alt="Chrome Web Store", target="_blank", rel="noopener")
                            img(src="@/assets/mch/ChromeWebStore.png")
                        a(href="https://github.com/mbaler/Medium-Code-Highlighter", alt="GitHub Repo", target="_blank", rel="noopener", style="display: inline-flex;")
                            span.icon.is-large: i.fab.fa-github.fa-3x
                    span.tech Tech Used:
                    .toolwrap
                        | {{ mchTech }}
            .proj.proj3.column.is-one-third
                .box
                    .projhead
                        figure.iconpreview
                            img(src="../assets/circled.png")
                        h4.title.is-5 This Website!
                    figure.screenshot
                        span.wink(style="text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);") 😉
                    .projlinks
                        a(href="https://github.com/mbaler/personal-site", alt="GitHub Repo", target="_blank", rel="noopener", style="display: inline-flex;")
                            span.icon.is-large: i.fab.fa-github.fa-3x
                    span.tech Tech Used:
                    .toolwrap
                        | {{ websiteTech }}
        .comingsoon
            h3.subtitle.is-4
                | More projects (and a 
                strong: em blog
                | ) coming soon...
</template>

<script>
import mediumZoom from "medium-zoom";

export default {
    name: "Projects",

    data() {
        return {
            wrtcdcDesc: `Created while working at Weblio in Japan. Helps users test & troubleshoot their video/audio devices, as well as video/audio bandwidth settings.
            Allowed pre-emptive test of setup before entering online lesson room.
            Utilized a fork of PeerJS and manipulated the MediaStream API to create a WebRTC video call with oneself.`,
            wrtcdcTech: `JS (ES6+), PeerJS (SkyWay), MediaStream API, Pug, Gulp, Webpack, Babel, jQuery, (WebRTC)`,
            mchDesc: `Chrome extension for adding simple and easy code syntax highlighting to Medium articles.
            Highlight theme can be changed on-the-fly, via popup UI, from a handful of popular themes.
            Works on all Medium articles, regardless of domain.`,
            mchTech: `JS (ES6+), highlight.js`,
            websiteTech: `JS (ES6+), Vue, Bulma, SASS, Pug, NPM, Webpack, Babel, Netlify`,
        };
    },

    mounted() {
        mediumZoom("[data-zoomable]", {
            background: "rgba(72, 72, 72, 0.75)",
        });
    }
}
</script>

<style lang="sass" scoped>
#projects
    .showcase-wrapper
        width: 100%;
        margin: auto;
        padding-top: 10px;
        // display: flex;
        // align-items: center;

        .proj
            @media screen and (max-width: 1024px)
                &:not(:first-of-type)
                    margin-top: 50px;
                margin-top: 30px;
            

        .box
            transform: perspective(1px) translateZ(0);
            box-shadow: 0 0 1px rgba(0, 0, 0, 0);
            transition-duration: 0.3s;
            transition-property: box-shadow, transform;

            &:hover
                box-shadow: 0 10px 13px 0px rgba(0, 0, 0, 0.5);
                transform: scale(1.1);

        .projhead
            display: block;
            margin-bottom: 10px;

        .description
            margin: 15px 0;
            font-size: 15px;
            display: inline-block;
            // white-space: pre-line;
            &.smidgeUp
                margin-top: 0;
        

        .projlinks 
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            justify-content: center;

            a
                padding: 0 7px;
                color: black;

                // 
                &:hover
                    animation: jelly 0.5s;

                    @keyframes jelly
                        0%, 100%
                          transform: scale(1, 1);
                        25%
                          transform: scale(0.9, 1.1);
                        50%
                          transform: scale(1.1, 0.9);
                        75%
                          transform: scale(0.95, 1.05);

        .tech
            padding-top: 20px;
            border-top: 1px solid #cacaca;
            font-size: 18px;
            display: inline-block;
            width: 80%
            font-weight: bold;

        .toolwrap
            font-size: 15px;

        figure.iconpreview
            margin: 0 auto 10px auto;
            width: 80px;
            height: 80px;
            
            img
                width: 80px;
                height: 80px;

        figure.screenshot
            margin-bottom: 20px;
            height: 230px;
            @media screen and (max-width: 1024px)
                height: 160px;
            
            display: flex;
            align-items: center;
            justify-content: center;

            img
                height: auto;
                max-width: 100%;
                max-height: 100%;
                box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.35);
            
            .wink
                font-size: 100px;
                pointer-events: none;

    .comingsoon
        margin-top: 60px;

</style>
