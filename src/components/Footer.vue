<template lang="pug">
    footer.footer#contact
      .content.has-text-centered.is-size-5
        .foot-middle
            .contact-mail
                a.email.is-inline-block(href="mailto:howdy@macbaler.me", target="_blank")
                    span.icon.is-large
                        i.fas.fa-envelope.fa-2x
                    p howdy@macbaler.me
                p 💬 Feel free to reach out and slide a message my way. 🙂
            
            .link-wrapper
                .links
                    a.icon.is-large(
                        href="https://github.com/mbaler",
                        v-tooltip="{content: 'GitHub', placement: 'bottom', trigger: 'hover', delay: {show: 50, hide: 0}, offset: '2px', }",
                        alt="GitHub",
                        target="_blank",
                        rel="noopener"
                    )
                        i.fab.fa-github.fa-2x
                    a.icon.is-large(
                        href="https://www.linkedin.com/in/macbaler/",
                        v-tooltip="{content: 'LinkedIn', placement: 'bottom', trigger: 'hover', delay: {show: 50, hide: 0}, offset: '2px', }",
                        alt="LinkedIn",
                        target="_blank",
                        rel="noopener"
                    )
                        i.fab.fa-linkedin.fa-2x
                    a.icon.is-large(
                        href="https://twitter.com/Mackles93",
                        v-tooltip="{content: 'Twitter', placement: 'bottom', trigger: 'hover', delay: {show: 50, hide: 0}, offset: '2px', }",
                        alt="Twitter",
                        target="_blank",
                        rel="noopener"
                    )
                        i.fab.fa-twitter.fa-2x
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
                    img.is-inline(src="@/assets/vue-logo.png")
                | · 
                a(
                    href="https://bulma.io/",
                    v-tooltip="{content: 'Bulma', placement: 'top', trigger: 'hover', delay: {show: 50, hide: 0}, offset: '14px', }",
                    alt="Bulma",
                    target="_blank",
                    rel="noopener"
                )
                    img.is-inline(src="@/assets/bulma-logo-crop.png")
                | ·
                a(
                    href="https://babeljs.io/",
                    v-tooltip="{content: 'Babel', placement: 'top', trigger: 'hover', delay: {show: 50, hide: 0}, offset: '14px', }",
                    alt="Babel",
                    target="_blank",
                    rel="noopener"
                )
                    img.is-inline(src="@/assets/babel-logo.png", style="margin-bottom: -1px;")
                | · 
                a(
                    href="https://webpack.js.org/",
                    v-tooltip="{content: 'Webpack', placement: 'top', trigger: 'hover', delay: {show: 50, hide: 0}, offset: '14px', }",
                    alt="Webpack",
                    target="_blank",
                    rel="noopener"
                )
                    img.is-inline(src="@/assets/webpack-logo.svg")
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
        height: 400px;
        @media screen and (max-width: 1024px)
            height: 425px;
        width: 100%;
        z-index: 0;
        position: sticky;
        bottom: 0;

        .content
            height: 100%;

            position: relative;

            .foot-middle
                padding: 5px 0;
                
                .email
                    width: 300px;
                    background-color: #7d0000;
                    border-radius: 10px;
                    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.5);

                    position: relative;
                    padding: 5px 0;
                    margin-bottom: 20px;
                    color: #fff;
                    transition: all 0.2s ease-in-out;
                    &:hover
                        background-color: #fff;
                        color: #7d0000;

                    // &::before, &::after
                    //     content: '';
                    //     position: absolute;
                    //     left: 0;
                    //     right: 0;
                    //     height: 2px;
                    //     background-color: #ff0000;
                    //     transform: scaleX(0);
                    //     transition: transform 0.5s ease;
                    // &::before
                    //     top: 0;
                    //     transform-origin: center right;
                    
                    // &:hover::before
                    //     transform-origin: center left;
                    //     transform: scaleX(1);
                    
                    // &::after
                    //     bottom: 0;
                    //     transform-origin: center left;

                    // &:hover::after
                    //     transform-origin: center right;
                    //     transform: scaleX(1);

                .link-wrapper
                    margin: 28px 0 40px 0;

                    .links
                        a.icon
                            padding: 2px 31px;
                            color: #32bdff;

                            &:hover
                                color: #0092d8;

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
