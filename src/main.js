import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

if (process.env.VUE_APP_API_PROXY) {
  process.env.VUE_APP_BASE_URL =
    process.env.VUE_APP_API_PROXY + process.env.VUE_APP_BASE_URL;

  process.env.VUE_APP_GEOCODER =
    process.env.VUE_APP_API_PROXY + process.env.VUE_APP_GEOCODER;

  process.env.VUE_APP_GET_IMG_URL =
    process.env.VUE_APP_API_PROXY + process.env.VUE_APP_GET_IMG_URL;
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
