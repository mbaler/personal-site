import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

const isProd = process.env.NODE_ENV === "production";


// google analytics
import VueAnalytics from "vue-analytics";
Vue.use(VueAnalytics, {
  id: "UA-143076080-1",
  router,
  autoTracking: {
    skipSamePath: true, // prevent re-track on same path but hash change (i.e. / --> /#about)
  },
  debug: {
    enabled: !isProd,
    sendHitTask: isProd
  }
});
Vue.mixin({
  methods: {
    gaSendEvent: function(action, label) {
      const category = "Buttons & Links";
      this.$ga.event({
        eventCategory: category,
        eventAction: action,
        eventLabel: label,
      });
    }
  }
});

// icons
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faExternalLinkAlt, faHandPointDown } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
library.add(
  faEnvelope, faExternalLinkAlt, faHandPointDown,
  faLinkedin, faGithub, faTwitter,
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

// fonts
import "./fonts/fonts.css";

// lazyload
import "lazysizes";

// tooltips
import VTooltip from "v-tooltip";
import "./styles/tooltip.css";
Vue.use(VTooltip);

// bulma
import "bulma/css/bulma.css";
import "bulma-timeline/dist/css/bulma-timeline.min.css";


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
