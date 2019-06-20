import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

// fonts
import "./css/fonts.css";
import "typeface-poppins";

import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/css/all.css";

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
