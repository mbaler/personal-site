import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

// tooltips
import VTooltip from "v-tooltip";
Vue.use(VTooltip);
import "./css/tooltip.css";

// fonts
import "./css/fonts.css";
import "typeface-poppins";

// bulma
import "bulma/css/bulma.css";

// icons
import "@fortawesome/fontawesome-free/css/all.css";

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
