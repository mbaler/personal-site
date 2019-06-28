<template lang="pug">
    .container#projects
        h2.title.is-2.scrollio-immediate.head Projects
        h3.subtitle.is-4.scrollio-immediate.head
            | Some little 
            span.magic-highlight ditties
            | &nbsp;of mine.
        .showcase-wrapper.columns.is-centered.is-variable.is-7
            .proj.proj1.column.is-one-third.scrollio
                .box
                    a.projhead(href="https://github.com/mbaler/webrtc-kun", alt="WebRTC Device Checker", target="_blank", rel="noopener")
                        figure.iconpreview
                            img(:data-src="require(`@/assets/wrtcdc/webrtclogocropW.png`)").lazyload
                        h4.title.is-5 WebRTC Device Checker
                    figure.screenshot
                        img(:data-src="require(`@/assets/wrtcdc/ss.png`)", data-zoomable).lazyload
                    p.description.smidgeUp {{ wrtcdcDesc }}
                    .projlinks
                        a(href="https://eikaiwa.weblio.jp/device_checker?bandwidth", alt="Live Example", target="_blank", rel="noopener")
                            span.icon.is-large.has-text-link
                                font-awesome-icon(:icon="['fas', 'external-link-alt']", size="2x")
                        a(href="https://github.com/mbaler/webrtc-kun", alt="GitHub Repo", target="_blank", rel="noopener", style="display: inline-flex;")
                            span.icon.is-large
                                font-awesome-icon(:icon="['fab', 'github']", size="3x")
                    span.tech Tech Used:
                    .techwrap
                        .images
                            img(:data-src="require(`@/assets/js_es6.png`)", alt="JavaScript (ES6+)", v-tooltip="{content: 'JavaScript (ES6+)', placement: 'bottom', trigger: 'hover click', delay: {show: 50, hide: 0}, offset: '4px', }",).lazyload
                            img(:data-src="require(`@/assets/peerjs.png`)", alt="PeerJS", v-tooltip="{content: 'PeerJS', placement: 'bottom', trigger: 'hover', delay: {show: 50, hide: 0}, offset: '4px', }",).lazyload
                            img(:data-src="require(`@/assets/pug.svg`)", alt="Pug", v-tooltip="{content: 'Pug', placement: 'bottom', trigger: 'hover', delay: {show: 50, hide: 0}, offset: '4px', }",).lazyload
                            .smallwrap: img(:data-src="require(`@/assets/gulp.png`)", alt="Gulp", v-tooltip="{content: 'Gulp', placement: 'bottom', trigger: 'hover', delay: {show: 50, hide: 0}, offset: '4px', }",).lazyload
                            img(:data-src="require(`@/assets/webpack-logo.svg`)", alt="Webpack", v-tooltip="{content: 'Webpack', placement: 'bottom', trigger: 'hover', delay: {show: 50, hide: 0}, offset: '4px', }",).lazyload
                            img(:data-src="require(`@/assets/babel-logo.png`)", alt="Babel", v-tooltip="{content: 'Babel', placement: 'bottom', trigger: 'hover', delay: {show: 50, hide: 0}, offset: '4px', }",).lazyload
                            img(:data-src="require(`@/assets/jquery.gif`)", alt="jQuery", v-tooltip="{content: 'jQuery', placement: 'bottom', trigger: 'hover', delay: {show: 50, hide: 0}, offset: '4px', }",).lazyload
            .proj.proj2.column.is-one-third.scrollio
                .box
                    a.projhead(href="https://github.com/mbaler/Medium-Code-Highlighter", alt="Medium Code Highlighter - Chrome Extension", target="_blank", rel="noopener")
                        figure.iconpreview
                            img(:data-src="require(`@/assets/mch/mchicon.png`)").lazyload
                        h4.title.is-5 Medium Code Highlighter
                    figure.screenshot
                        img(:data-src="require(`@/assets/mch/promo_gif.gif`)", data-zoomable).lazyload
                    p.description {{ mchDesc }}
                    .projlinks(style="margin-left: -10px;")
                        a(href="https://chrome.google.com/webstore/detail/medium-code-highlighter/apdaagmhepellbjjbnaljaocodjjjjfd", alt="Chrome Web Store", target="_blank", rel="noopener")
                            img(:data-src="require(`@/assets/mch/ChromeWebStore.png`)").lazyload
                        a(href="https://github.com/mbaler/Medium-Code-Highlighter", alt="GitHub Repo", target="_blank", rel="noopener", style="display: inline-flex;")
                            span.icon.is-large
                                font-awesome-icon(:icon="['fab', 'github']", size="3x")
                    span.tech Tech Used:
                    .techwrap
                        .images.few
                            img(:data-src="require(`@/assets/js_es6.png`)", alt="JavaScript (ES6+)", v-tooltip="{content: 'JavaScript (ES6+)', placement: 'bottom', trigger: 'hover', delay: {show: 50, hide: 0}, offset: '4px', }",).lazyload
                            img(:data-src="require(`@/assets/hljs.png`)", alt="highlight.js", v-tooltip="{content: 'highlight.js', placement: 'bottom', trigger: 'hover', delay: {show: 50, hide: 0}, offset: '4px', }",).lazyload
            .proj.proj3.column.is-one-third.scrollio
                .box
                    .projhead
                        figure.iconpreview
                            img(:data-src="require(`@/assets/circled.png`)").lazyload
                        h4.title.is-5 This Website!
                    figure.screenshot
                        span.wink(style="text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);") 😉
                    .projlinks
                        a(href="https://github.com/mbaler/personal-site", alt="GitHub Repo", target="_blank", rel="noopener", style="display: inline-flex;")
                            span.icon.is-large
                                font-awesome-icon(:icon="['fab', 'github']", size="3x")
                    span.tech Tech Used:
                    .techwrap(style="margin: 10px auto;")
                        .images.many
                            img(:data-src="require(`@/assets/js_es6.png`)", alt="JavaScript (ES6+)", v-tooltip="{content: 'JavaScript (ES6+)', placement: 'bottom', trigger: 'hover', delay: {show: 50, hide: 0}, offset: '4px', }",).lazyload
                            img(:data-src="require(`@/assets/vue-logo.png`)", alt="Vue", v-tooltip="{content: 'Vue', placement: 'bottom', trigger: 'hover', delay: {show: 50, hide: 0}, offset: '4px', }",).lazyload
                            .smallwrap: img(:data-src="require(`@/assets/bulma-logo-crop.png`)", alt="Bulma", v-tooltip="{content: 'Bulma', placement: 'bottom', trigger: 'hover', delay: {show: 50, hide: 0}, offset: '4px', }",).lazyload
                            img(:data-src="require(`@/assets/sass.png`)", alt="Sass", v-tooltip="{content: 'Sass', placement: 'bottom', trigger: 'hover', delay: {show: 50, hide: 0}, offset: '4px', }",).lazyload
                            img(:data-src="require(`@/assets/pug.svg`)", alt="Pug", v-tooltip="{content: 'Pug', placement: 'bottom', trigger: 'hover', delay: {show: 50, hide: 0}, offset: '4px', }",).lazyload
                            img(:data-src="require(`@/assets/npm.png`)", alt="npm", v-tooltip="{content: 'npm', placement: 'bottom', trigger: 'hover', delay: {show: 50, hide: 0}, offset: '4px', }", style="width: 60px; height: auto;").lazyload
                            img(:data-src="require(`@/assets/webpack-logo.svg`)", alt="Webpack", v-tooltip="{content: 'Webpack', placement: 'bottom', trigger: 'hover', delay: {show: 50, hide: 0}, offset: '4px', }",).lazyload
                            img(:data-src="require(`@/assets/babel-logo.png`)", alt="Babel", v-tooltip="{content: 'Babel', placement: 'bottom', trigger: 'hover', delay: {show: 50, hide: 0}, offset: '4px', }",).lazyload
                            img(:data-src="require(`@/assets/netlify.png`)", alt="Netlify", v-tooltip="{content: 'Netlify', placement: 'bottom', trigger: 'hover', delay: {show: 50, hide: 0}, offset: '4px', }",).lazyload
        .comingsoon.scrollio-immediate
            h3.subtitle.is-4
                | More projects (and a 
                strong.magic-highlight: em blog
                | ) Coming Soon™ 🕑
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
    .head
        color: #fff;
        text-shadow: 0px 2px 1px #000;
    .showcase-wrapper
        width: 100%;
        margin: auto;
        padding-top: 10px;

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

        .techwrap
            font-size: 15px;
            margin: auto;
            height: 75px;
            display: flex;
            align-items: center;
            justify-content: center;

            .images
                height: 65px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;

                &.few img
                    padding: 0 10px;
                
                &.many img
                    padding: 0 6px;

                .smallwrap
                    width: 35px;
                    padding: 0 3px;
                    margin: 3px 0;

                    img
                        margin: 0 !important;
                        vertical-align: middle;
                        padding: 0 !important;

                img
                    height: 32px;
                    width: auto;
                    padding: 0 3px;
                    margin: 3px 0;

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
        line-height: 1.5;

        h3
            display: inline-block;
            background: #ffffffe0;
            border-radius: 6px;
            width: 35vw;
            height: 40px;
            line-height: 40px;


</style>
