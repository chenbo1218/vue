import Vue from "vue";
import App from "./app.vue";
import router from "./router.js";
import moment from 'moment';
import "@nutui/nutui/dist/nutui.min.css";
import NutUI from "@nutui/nutui";
import request from "./utils/request";
import * as filters from "./filters/index";
NutUI.install(Vue);
Vue.prototype.$req = request;
window.request = request;
window.moment = moment;
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});

new Vue({
    router,
    mounted() {
    },
    render: h => h(App)
}).$mount("#app");
