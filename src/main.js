import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

// icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faExternalLinkAlt, faHandPointDown } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faEnvelope, faExternalLinkAlt, faHandPointDown,
  faLinkedin, faGithub, faTwitter,
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

// lazyload
import "lazysizes";

// tooltips
import VTooltip from "v-tooltip";
Vue.use(VTooltip);
import "./styles/tooltip.css";

// fonts
import "./fonts/fonts.css";

// bulma
import "bulma/css/bulma.css";
import "bulma-timeline/dist/css/bulma-timeline.min.css";

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
