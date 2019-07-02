<template lang="pug">
    .container#splash
        .topwrap.columns
            #typingwrap.column.is-7
                .typingdescription
                .typingsignature
            .imageoutside.column.is-5
                figure.inner
                    img.splash(:data-src="require(`@/assets/circled.png`)").lazyload
        .hello.scrollio-hand
            router-link(to="/#about")#scrollbutton
                font-awesome-icon(:icon="['fas', 'hand-point-down']").hand
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

        splashImage.style.opacity = "0";
        splashImage.style.marginTop = "100px"
        splashImage.addEventListener("load", function () {
            this.style.opacity = "1";
            this.style.marginTop = "0";
        })

        setTimeout(() => {
            splashImage.style.boxShadow = "0 0 0 0 rgba(0, 0, 0, 0), 10px 20px 4px 1px #ff000082 inset";
        }, 1000);
        
    },

    methods: {
        typing() {
            const signature = new TypeIt(".typingsignature", {
                speed: 125,
                startDelay: 850,
                cursorChar: `<span style="color: #bd0000; text-shadow: 0px 1px 2px #bd0000cc;">▁</span>`, // ▏OR▁
            })
            .type("Mac Baler.");

            new TypeIt(".typingdescription", {
              breakLines: false,
              waitUntilVisible: true,
              startDelay: 1500,
              speed: 100,
              cursorChar: `<span style="color: #bd0000; text-shadow: 0px 1px 2px #bd0000cc;">▁</span>`,
            //   loop: true,
            //   loopDelay: 5000,
            })
            // .empty()
            .type("just your average softwa")
            .delete(19)
            .type("a software engi")
            .delete()
            .type("an insanely stellar softwa")
            .delete(25)
            .options({speed: 65})
            .type(" curious, reliable, intelligent, warm, communicative software engineer.")
            // .break()
            // .pause(1000)
            // .options({speed: 125})
            .exec(async () => {
                await new Promise((resolve) => {
                    const parent = document.querySelector(".typingdescription");
                    const elt = parent.getElementsByTagName("span")[2];
                    elt.parentNode.removeChild(elt);
                    signature.go();
                    return resolve();
                });
            })
            .go();
        },

        logo3D() {
            const container = document.querySelector(".imageoutside");
            const inner = document.querySelector("figure.inner");
            const refreshRate = 10;
            let counter = 0;
            const upDown = 5;
            const leftRight = 5;

            const mouse = {
                // Track the mouse position relative to the center of the container.
                _x: container.offsetLeft + (137) + Math.floor(container.offsetWidth / 2),
                _y: container.offsetTop + (70) + Math.floor(container.offsetHeight / 2),
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

<style lang="sass">
.ti-wrapper, ti-container
    vertical-align: text-bottom !important;
</style>

<style lang="sass" scoped>
    #splash
        .topwrap
            height: 100%;

            padding-top: 0px;
            @media screen and (max-width: 1024px)
                padding-top: 60px;
            
            #typingwrap
                text-shadow: 0px 1px 2px #002245b3;
                color: $textDarkBlue;
                flex-direction: column;
                height: 100%;
                line-height: 75px;
                @media screen and (max-width: 1024px)
                    margin-top: 30px;
                    height: 120px !important;
                    line-height: 55px !important;
                    text-shadow:
                padding: 0px 0 10px 0;
                display: flex;
                justify-content: center;
                align-items: center;

                text-align: left;

                .typingdescription, .typingsignature
                    font-family: "Josefin Sans";
                    font-weight: 700;
                    width: 100%;
                    font-size: 62px;
                    text-transform: uppercase;
                    @media screen and (max-width: 1024px)
                        font-size: 27px;
                        line-height: 30px;
                .typingdescription
                    min-height: 48vh;
                    @media screen and (min-width: 1025px)
                        width: 109%;
                        margin-left: 5%;
                    @media screen and (max-width: 1024px)
                        min-height: 16vh;
                .typingsignature
                    min-height: 14vh;
                    width: 91% !important;
                    text-align: right !important;
                    padding-top: 0px
                    @media screen and (max-width: 1024px)
                        padding-top: 26px;
                        min-height: 4vh;

            .imageoutside
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding-left: 50px;
                perspective: 30px;
                @media screen and (max-width: 1024px)
                    padding-top: 70px;
                    padding-left: 10px;

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
                        animation: 2s cubic-bezier(.57,.06,.27,.84) 1.75s infinite pulse;

                        @keyframes pulse
                            0%
                                border-color: #00000000;
                            70%
                                border-color:  #ff000096;
                            100%
                                transform-origin: center;
                                transform: scale(1.30);
                                opacity: 0;

                    img.splash
                        border-radius: 50%;
                        transform: perspective(1px) translateZ(0);
                        transition: transform 0.3s, box-shadow 0.3s, opacity 0.75s, margin-top 0.65s;
                        &:hover
                            transform: scale(1.05);
                            box-shadow: 0px 2px 20px 1px rgba(0, 0, 0, 0.35), 10px 20px 4px 1px #ff000082 inset !important;
        .hello
            position: absolute;
            bottom: 40px;
            left: 0;
            right: 0;
            flex: 1;
            height: 15%;

            .hand
                font-size: 60px;
                @media screen and (max-width: 1024px)
                    font-size: 50px;
                
            @media screen and (max-width: 1024px)
                bottom: 25px;

            #scrollbutton
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                @media screen and (max-width: 1024px)
                    width: 3.5rem
                    height: 3.5rem
                    margin-left: -1.75rem;
                cursor: pointer;
                left: 50%;
                width: 4rem;
                height: 4rem;
                margin-left: -2.0rem;
                margin-top: 80px;
                color: $orangeLight !important;
                border: none;
                padding: .5rem;
                animation: scrollButton 1s cubic-bezier(.175,.885,.32,1.4) 0s infinite alternate;

                &:hover
                    color: $redTrue !important;

                &:after
                    content: "";
                    display: block;
                    position: absolute;
                    width: 140%;
                    height: 140%;
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
                        transform: translateY(-30%)
</style>
