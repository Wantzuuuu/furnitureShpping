// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import axios from 'axios';
import "bootstrap";
import VueAxios from 'vue-axios';
// 表單驗證
import VeeValidate, { Validator } from 'vee-validate';
import TW from 'vee-validate/dist/locale/zh_TW'
import router from './router';
import Loading from 'vue-loading-overlay';
// 輪播畫面
import VueCarousel from '@chenfengyuan/vue-carousel';
import BootstrapVue from 'bootstrap-vue'


// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
import './bus';
// filter
import currency from './filters/currency'
import date from "./filters/data"
Vue.use(VueAxios, axios)
Vue.use(VeeValidate);
Vue.use(VueCarousel);
Vue.use(BootstrapVue)
Validator.localize('zh-TW', TW)
Vue.component('Loading', Loading);
Vue.filter('currency', currency);
Vue.filter('date', date);
Vue.config.productionTip = false
axios.defaults.withCredentials = true;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
router.beforeEach((to, from, next) => {
  // console.log("to:" + to, "from:" + from, "next" + next);
  if (to.meta.requiresAuth) {
    const api = `${process.env.APIPATH}/api/user/check` //"https://vue-course-api.hexschool.io/api/joshwan/products"
    // const vm = this;
    axios.post(api).then((response) => {
      // console.log(response.data)
      if (response.data.success) {
        next();
      } else {
        next({
          path: "/login"
        })
      }
    });
  } else {
    next();
  }
})
