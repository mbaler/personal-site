<template lang="pug">
    footer#contact.footer.bottom
      .content.has-text-centered.is-size-5
        .foot-middle
            .contact-mail
                .email
                    span.icon.is-large
                        i.fas.fa-envelope.fa-2x
                    p howdy@macbaler.me
                span Feel free to reach out and slide a message my way. 🙂
            
            .link-wrapper
                .links
                    a.icon.is-large(
                        href="https://github.com/mbaler",
                        v-tooltip="{content: 'GitHub', placement: 'bottom', delay: {show: 100, hide: 100}, offset: '2px', }",
                        alt="GitHub",
                        target="_blank",
                        rel="noopener"
                    )
                        i.fab.fa-github.fa-2x
                    a.icon.is-large(
                        href="https://www.linkedin.com/in/macbaler/",
                        v-tooltip="{content: 'LinkedIn', placement: 'bottom', delay: {show: 100, hide: 100}, offset: '2px', }",
                        alt="LinkedIn",
                        target="_blank",
                        rel="noopener"
                    )
                        i.fab.fa-linkedin.fa-2x
                    a.icon.is-large(
                        href="https://twitter.com/Mackles93",
                        v-tooltip="{content: 'Twitter', placement: 'bottom', delay: {show: 100, hide: 100}, offset: '2px', }",
                        alt="Twitter",
                        target="_blank",
                        rel="noopener"
                    )
                        i.fab.fa-twitter.fa-2x
        .foot-bottom
            .built-by
                p This site was built with my own 🙌, utilizing:
                a(
                    href="https://vuejs.org/",
                    v-tooltip="{content: 'Vue', placement: 'top', delay: {show: 100, hide: 100}, offset: '14px', }",
                    alt="Vue",
                    target="_blank",
                    rel="noopener"
                )
                    img.is-inline(src="@/assets/vue-logo.png")
                | · 
                a(
                    href="https://bulma.io/",
                    v-tooltip="{content: 'Bulma', placement: 'top', delay: {show: 100, hide: 100}, offset: '14px', }",
                    alt="Bulma",
                    target="_blank",
                    rel="noopener"
                )
                    img.is-inline(src="@/assets/bulma-logo-crop.png")
                | ·
                a(
                    href="https://babeljs.io/",
                    v-tooltip="{content: 'Babel', placement: 'top', delay: {show: 100, hide: 100}, offset: '14px', }",
                    alt="Babel",
                    target="_blank",
                    rel="noopener"
                )
                    img.is-inline(src="@/assets/babel-logo.png", style="margin-bottom: -1px;")
                | · 
                a(
                    href="https://webpack.js.org/",
                    v-tooltip="{content: 'Webpack', placement: 'top', delay: {show: 100, hide: 100}, offset: '14px', }",
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
        background-color: #620000;
        color: white;
        padding: 2rem 1.5rem 1rem 1.5rem

        height: 400px;
        width: 100%;
        opacity: 0.8;
        z-index: 1;
        position: sticky;
        bottom: 0;

        .content
            height: 100%;

            position: relative;
            z-index: 2;
            padding-left: 5%;
            padding-right: 5%;

            .foot-middle
                padding-top: 10px;
                
                .email
                    margin-bottom: 15px;
                    .icon
                        color: #0089ff;

                .link-wrapper
                    margin: 40px 0 40px 0;

                    .links
                        a.icon
                            padding: 2px 31px;
                            color: #0089ff;

            .foot-bottom
                font-size: 16px;
                position: absolute;
                bottom: 5px;
                width: 100%;
                left: 0;
                right: 0;

                .built-by img
                    vertical-align: bottom;
                    height: 30px;
                    margin: 0 5px;
</style>
