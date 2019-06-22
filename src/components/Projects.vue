<template lang="pug">
    .container#projects
        h2.title.is-2 Projects
        h3.subtitle.is-4 Some little ditties of mine.
        .showcase-wrapper.columns.is-centered.is-variable.is-7
            .proj1.column.is-one-third
                .box
                    a.projhead(href="https://github.com/mbaler/webrtc-kun", alt="WebRTC Device Checker", target="_blank", rel="noopener")
                        figure.iconpreview
                            img(src="../assets/wrtcdc/webrtclogocropW.png")
                        h4.title.is-5 WebRTC Device Checker
                        h5.subtitle.is-5 testing text
                    figure.screenshot
                        img(src="../assets/wrtcdc/ss.png", data-zoomable)
                    p.description description to come...
                    span.tech Tech Used:
                    .toolwrap
                        | list coming
            .proj2.column.is-one-third
                .box
                    a.projhead(href="https://github.com/mbaler/Medium-Code-Highlighter", alt="Medium Code Highlighter - Chrome Extension", target="_blank", rel="noopener")
                        figure.iconpreview
                            img(src="../assets/mch/mchicon.png")
                        h4.title.is-5 Medium Code Highlighter
                        h5.subtitle.is-5 testing text
                    figure.screenshot
                        img(src="../assets/mch/mediumlargepromotile.jpg", data-zoomable)
                    p.description description to come...
                    span.tech Tech Used:
                    .toolwrap
                        | list coming
            .proj3.column.is-one-third
                .box
                    .projhead
                        figure.iconpreview
                            img(src="../assets/circled.png")
                        h4.title.is-5 This Website!
                        h5.subtitle.is-5 testing text
                    figure.screenshot
                        span.wink 😉
                    p.description description to come...
                    span.tech Tech Used:
                    .toolwrap
                        | list coming
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

        .projhead
            display: block;
            margin-bottom: 10px;

        .description
            margin: 15px 0;
            font-size: 18px;
            display: inline-block;

        .tech
            padding-top: 20px;
            border-top: 1px solid #cacaca;
            font-size: 18px;
            display: inline-block;
            width: 80%

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
