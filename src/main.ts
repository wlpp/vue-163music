import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import { Button, Carousel, CarouselItem } from "element-ui";
import "./assets/Iconfont/iconfont.css";
import "./assets/css/base.less";
// Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
axios.defaults.timeout = 5000; // 请求超时
axios.defaults.baseURL = "https://musicapi.leanapp.cn";

Vue.use(Button);
Vue.use(Carousel);
Vue.use(CarouselItem);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
