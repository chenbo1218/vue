import Vue from "vue";
import App from "./app.vue";
import router from "./router.js";
import "@nutui/nutui/dist/nutui.min.css";
import NutUI from "@nutui/nutui";
import request from "./utils/request";
NutUI.install(Vue);
Vue.prototype.$req = request;
window.request = request;
new Vue({
    router,
    mounted() {},
    render: h => h(App)
}).$mount("#app");
