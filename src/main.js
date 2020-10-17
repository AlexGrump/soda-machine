import Vue from "vue";
import App from "./App.vue";

// Vue modules
import router from "./router";
import store from "./store";

// Filters
import "@/modules/currencyFilter";

// Styles
import "@/styles/root.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
