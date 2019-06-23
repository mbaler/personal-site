import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

// tooltips
import VTooltip from "v-tooltip";
VTooltip.enabled = window.innerWidth > 768; // turn off on mobile
Vue.use(VTooltip);
import "./css/tooltip.css";

// fonts
import "./css/fonts.css";
import "typeface-poppins";
import "typeface-roboto";

// bulma
import "bulma/css/bulma.css";
import "bulma-timeline/dist/css/bulma-timeline.min.css";

// icons
import "@fortawesome/fontawesome-free/css/all.css";

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
