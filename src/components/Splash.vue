<template lang="pug">
    .container#splash
        .topwrap.columns
            #typingwrap.column.is-7
                .typingdescription
                .typingsignature
            .imageoutside.column.is-5
                figure.inner
                    img.splash(src="@/assets/circled.png")
        .hello
            router-link(to="/#about")#scrollbutton
                i.fa-3x.fas.fa-hand-point-down
</template>

<script>
import TypeIt from "typeit";

export default {
    name: "Splash",

    mounted() {
        this.typing();


        this.logo3D();

        // prevent no image boxshadow flash on mobile
        const splashImage = document.querySelector("img.splash");

        setTimeout(() => {
            splashImage.style.boxShadow = "0 0 0 0 rgba(0, 0, 0, 0), 10px 20px 4px 1px #ff000082 inset";
        }, 1000);
        
    },

    methods: {
        typing() {
            const signature = new TypeIt(".typingsignature", {
                // strings: ["Mac Baler."],
                speed: 125,
                startDelay: 1500,
                cursorChar: "<span style='color: #a50000; font-weight: 400;'>|</span>"
            })
            .type("Mac Baler.");

            new TypeIt(".typingdescription", {
              breakLines: false,
              waitUntilVisible: true,
              startDelay: 1500,
              speed: 100,
              cursorChar: "<span style='color: #a50000; font-weight: 400;'>|</span>" // #a50000, #2f0000, #650000, #fff, #000
            //   loop: true,
            //   loopDelay: 5000,
            })
            // .empty()
            .type("just your average softwa")
            .delete(19)
            .type("a software engi")
            .delete()
            .type("a stellar softwa")
            .delete(15)
            .options({speed: 65})
            .type("n intelligent, warm, communicative, reliable, curious software engineer.")
            // .break()
            // .pause(1000)
            // .options({speed: 125})
            .options({cursorChar: "<span style='color: #fff; font-weight: 400;'>|</span>"})
            .exec(async () => {
                await new Promise((resolve) => {
                    // const wrap = document.querySelector(".typingdescription");
                    // console.log("hi");
                    // console.log(wrap);
                    // wrap.style.textAlign = "right";
                    const parent = document.querySelector(".typingdescription");
                    const elt = parent.getElementsByTagName("span")[2];
                    elt.parentNode.removeChild(elt);
                    signature.go();
                    return resolve();
                });
            })
            // .type("Mac Baler.")
            .go();
        },

        logo3D() {
            const container = document.querySelector(".imageoutside");
            // const container = document.querySelector(".topwrap");
            const inner = document.querySelector("figure.inner");
            const refreshRate = 10;
            let counter = 0;
            const upDown = 5;
            const leftRight = 5;

            const rect = container.getBoundingClientRect();
            const mouse = {
                // Track the mouse position relative to the center of the container.
                // _x: container.offsetLeft + (160) + Math.floor(container.offsetWidth / 2),
                // _y: container.offsetTop + (57) + Math.floor(container.offsetHeight / 2),
                _x: rect.left + Math.floor(container.offsetWidth / 2),
                _y: rect.top + Math.floor(container.offsetHeight / 2),
                x: 0,
                y: 0,
                updatePosition: function(event) {
                    const e = event || window.event;
                    this.x = e.clientX - this._x;
                    this.y = (e.clientY - this._y) * -1;
                },
            };

            container.onmouseenter = (event) => _update(event);
            container.onmouseleave = () => inner.style = "";
            container.onmousemove = (event) => _isTimeToUpdate() ? _update(event) : null;


            function _isTimeToUpdate() {
                return counter++ % refreshRate === 0;
            }

            function _update(event) {
                mouse.updatePosition(event);
                _updateTransformStyle(
                    (mouse.y / inner.offsetHeight / 2).toFixed(2),
                    (mouse.x / inner.offsetWidth / 2).toFixed(2)
                );
            }

            function _updateTransformStyle(x, y) {
                x *= upDown;
                y *= leftRight;
                const style = `rotateX(${x}deg) rotateY(${y}deg)`;

                inner.style.transform = style;
                inner.style.webkitTransform = style;
            }
        }
    }
}
</script>

<style lang="sass" scoped>
    #splash
        .topwrap
            height: 80%;

            padding-top: 50px;
            @media screen and (max-width: 1024px)
                padding-top: 60px;
            
            #typingwrap
                flex-direction: column;
                @media screen and (max-width: 1024px)
                    height: 120px !important;
                    line-height: 50px !important;
                padding: 0px 0 10px 0;
                display: flex;
                justify-content: center;
                align-items: center;

                text-align: left;
                // text-align: right;

                .typingdescription, .typingsignature
                    width: 100%;
                    font-family: "Poppins";
                    font-size: 70px;
                    font-weight: 600;
                    // font-variant: small-caps;
                    text-transform: uppercase;
                    @media screen and (max-width: 1024px)
                        font-size: 30px;
                        line-height: 33px;
                .typingsignature
                    width: 91% !important;
                    // text-align: left !important;
                    text-align: right !important;
                    @media screen and (max-width: 1024px)
                        padding-top: 10px;

                span
                    display: inline-block;
                    vertical-align: middle;

            .imageoutside
                display: inline-block;
                padding: 60px 0 40px 0;
                perspective: 30px;
                @media screen and (max-width: 1024px)
                    padding-top: 75px;

                figure
                    transition: transform 0.5s;
                    @media screen and (min-width: 1025px)
                        height: 362px;
                        width: 362px;
                    @media screen and (max-width: 1024px)
                        height: 250px;
                        width: 250px;

                    margin: 10px auto;

                    position: relative
                    border-radius: 50%;
                    &::before
                        content: "";
                        border-radius: 50%;
                        z-index: -1;
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        border: 2px solid #ff000000;
                        transform-origin: center;
                        transform: scale(1);
                        animation: 2s cubic-bezier(.57,.06,.27,.84) 1s infinite pulse;

                        @keyframes pulse
                            0%
                                border-color: #00000000;
                            70%
                                border-color:  #ff000096;
                            100%
                                transition: all 0.75s ease-in-out;
                                transform-origin: center;
                                transform: scale(1.30);
                                opacity: 0;

                    img.splash
                        border-radius: 50%;

                        transform: perspective(1px) translateZ(0);
                        transition-duration: 0.3s;
                        transition-property: transform, box-shadow;
                        &:hover
                            transform: scale(1.05);
                            box-shadow: 0px 2px 20px 1px rgba(0, 0, 0, 0.35), 10px 20px 4px 1px #ff000082 inset !important;
        .hello
            position: absolute;
            bottom: 40px;

            left: 0;
            right: 0;
            // margin: auto;
            flex: 1;
            // margin-top: 30px;

            height: 15%;
                
            @media screen and (max-width: 1024px)
                // margin-top: 5px;
                bottom: 40px;

            #scrollbutton
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                // bottom: 25px;
                // @media screen and (max-width: 1024px)
                //     bottom: 0;
                // cursor: pointer;
                left: 50%;
                width: 3rem;
                height: 3rem;
                margin-left: -1.5rem;
                margin-top: 80px;
                color: #ff771e !important;
                border: none;
                padding: .5rem;
                animation: scrollButton 1s cubic-bezier(.175,.885,.32,1.4) infinite alternate;

                &:hover
                    color: #ff1e00 !important;

                &:after
                    content: "";
                    display: block;
                    position: absolute;
                    width: 150%;
                    height: 150%;
                    background-color: rgba(255, 0, 198, 0.11);
                    border-radius: 50%;
                    transform: scale(0);
                    transition: transform .2s cubic-bezier(.175,.885,.32,1.4);

                &:hover:after
                    transform: scale(1);

                @keyframes scrollButton
                    0%
                        transform: translateY(0)

                    to
                        transform: translateY(-20%)
</style>
