import Vue from "vue";
import App from "./App.vue";
import { createPinia, PiniaVuePlugin } from "pinia";
import VueCompositionApi from "@vue/composition-api";
import esriConfig from "@arcgis/core/config.js";

esriConfig.apiKey = import.meta.env.VITE_ESRI_API_KEY;

Vue.use(VueCompositionApi);
Vue.use(PiniaVuePlugin);

const pinia = createPinia();

new Vue({
  render: (h) => h(App),
  pinia,
}).$mount("#app");
