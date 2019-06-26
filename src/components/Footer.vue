<template lang="pug">
    footer.footer#contact
      .foot-wrap
        .content.has-text-centered.is-size-5
            .foot-middle
                .link-wrapper
                    .links
                        a.icon.is-large(href="https://github.com/mbaler", alt="GitHub", target="_blank", rel="noopener").gh
                            font-awesome-icon(:icon="['fab', 'github']", size="2x")
                        a.icon.is-large(href="https://www.linkedin.com/in/macbaler/", alt="LinkedIn", target="_blank", rel="noopener").li
                            font-awesome-icon(:icon="['fab', 'linkedin']", size="2x")
                        a.icon.is-large(href="https://twitter.com/Mackles93", alt="Twitter", target="_blank", rel="noopener").tw
                            font-awesome-icon(:icon="['fab', 'twitter']", size="2x")
                .tagline: p 💬 Feel free to reach out and slide a message my way. 🙂
                .contact-mail.scrollio
                    a.email.is-inline-block(href="mailto:howdy@macbaler.me", target="_blank")
                        span.icon.is-large
                            font-awesome-icon(:icon="['fas', 'envelope']", size="2x")
                        p howdy@macbaler.me
            .foot-bottom
                .built-by
                    p Built with my own 
                        span(style="font-size: 20px") 🙌
                        | , utilizing:
                    a(
                        href="https://vuejs.org/",
                        v-tooltip="{content: 'Vue', placement: 'top', trigger: 'hover', delay: {show: 50, hide: 0}, offset: '14px', }",
                        alt="Vue",
                        target="_blank",
                        rel="noopener"
                    )
                        img.is-inline(:data-src="require(`@/assets/vue-logo.png`)").lazyload
                    | · 
                    a(
                        href="https://bulma.io/",
                        v-tooltip="{content: 'Bulma', placement: 'top', trigger: 'hover', delay: {show: 50, hide: 0}, offset: '14px', }",
                        alt="Bulma",
                        target="_blank",
                        rel="noopener"
                    )
                        img.is-inline(:data-src="require(`@/assets/bulma-logo-crop.png`)").lazyload
                    | ·
                    a(
                        href="https://babeljs.io/",
                        v-tooltip="{content: 'Babel', placement: 'top', trigger: 'hover', delay: {show: 50, hide: 0}, offset: '14px', }",
                        alt="Babel",
                        target="_blank",
                        rel="noopener"
                    )
                        img.is-inline(:data-src="require(`@/assets/babel-logo.png`)", style="margin-bottom: -1px;").lazyload
                    | · 
                    a(
                        href="https://webpack.js.org/",
                        v-tooltip="{content: 'Webpack', placement: 'top', trigger: 'hover', delay: {show: 50, hide: 0}, offset: '14px', }",
                        alt="Webpack",
                        target="_blank",
                        rel="noopener"
                    )
                        img.is-inline(:data-src="require(`@/assets/webpack-logo.svg`)").lazyload
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style lang="sass" scoped>
    footer
        background-color: #650000;
        color: white;
        padding: 2rem 0 0 0;
        height: 93vh;
        @media screen and (max-width: 1024px)
            height: 80vh;
        width: 100%;
        z-index: 0;
        position: sticky;
        bottom: 0;

        .foot-wrap
            position: relative;
            height: 100%;

            .content
                height: 100%;
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                width: 100%;

                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;

                .foot-middle
                    margin-bottom: 100px;
                    @media screen and (max-width: 1024px)
                        margin-bottom: 70px;
                    padding: 5px 0;
                    height: 450px;

                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;

                    .tagline
                        margin: 40px 0 80px 0;
                        @media screen and (max-width: 1024px)
                            margin: 10px 0 50px 0;

                    .contact-mail
                        padding-bottom: 60px;
                        @media screen and (max-width: 1024px)
                            padding-bottom: 50px;
                    
                        .email
                            width: 300px;
                            background-color: #7d0000;
                            color: #fff;
                            @media screen and (max-width: 1024px)
                                background-color: #fff;
                                color: #7d0000;
                            border-radius: 10px;
                            box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.5);

                            position: relative;
                            padding: 5px 0;
                            margin-bottom: 60px;
                            transition: all 0.2s ease-in-out;
                            &:hover
                                background-color: #fff;
                                color: #7d0000;

                                svg
                                    filter: none;
                            
                            &::before
                                content: "";
                                z-index: -1;
                                position: absolute;
                                top: 0;
                                bottom: 0;
                                left: 0;
                                right: 0;
                                border: 4px solid #ffffff00;
                                border-radius: 10px;
                                transform-origin: center;
                                transform: scale(1);
                                animation: 2s cubic-bezier(.57,.06,.27,.84) 0.75s infinite pulse;

                                @keyframes pulse
                                    0%
                                        border-color: #ffffff00;
                                    70%
                                        border-color:  #fff;
                                    85%
                                        opacity: 0;
                                    100%
                                        transform-origin: center;
                                        transform: scale(1.20, 1.55);
                                        opacity: 0;

                            svg
                                filter: drop-shadow(0px 2px 5px #000);
                                @media screen and (max-width: 1024px)
                                    filter: none;
                                
                    .link-wrapper
                        margin: 28px 0 40px 0;

                        .links
                            a.icon
                                padding: 2px 31px;
                                color: #32bdff;
                                transform: perspective(1px) translateZ(0);

                                &:hover
                                    color: #0092d8;
                                    animation-name: hvr-wobble-vertical;
                                    animation-duration: 1s;
                                    animation-timing-function: ease-in-out;
                                    animation-iteration-count: 1;

                                    @keyframes hvr-wobble-vertical
                                      16.65%
                                        transform: translateY(-8px);
                                      33.3%
                                        transform: translateY(6px);
                                      49.95%
                                        transform: translateY(-4px);
                                      66.6%
                                        transform: translateY(2px);
                                      83.25%
                                        transform: translateY(-1px);
                                      100%
                                        transform: translateY(0);
                                
                                svg
                                    filter: drop-shadow(0px 2px 5px #000);

                                &.gh
                                    color: #24292e;
                                    svg
                                        background-color: #e4e4e4;
                                        border-radius: 48%;
                                &.li
                                    color: #165ce2;
                                    svg
                                        width: 0.9em;
                                &.tw
                                    color: #1da1f2;


                .foot-bottom
                    position: absolute;
                    bottom: 0px;
                    left: 0;
                    right: 0;
                    font-size: 16px;
                    padding: 20px 0 23px 0;
                    width: 100%;
                    background-color: #2f0000;

                    .built-by img
                        vertical-align: bottom;
                        height: 30px;
                        margin: 0 5px;
</style>
