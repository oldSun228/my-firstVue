import Vue from 'vue';
import App from './App';
import router from './router';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import backend from "./utils/backend";
import api from "./conf/api";


Vue.config.productionTip = false;
Vue.use(ElementUI);

Object.defineProperty(Vue.prototype, '$backend', {
  get() {
    return backend;
  }
});

Object.defineProperty(Vue.prototype, '$api', {
  get() {
    return api;
  }
});

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
