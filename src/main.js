import Vue from 'vue';
import App from './App';
import store from './store';
import ApiService from './api';
import Helper from './plugins/helper';
import UniAsync from './plugins/uniAsync';
import Components from './plugins/components';

Vue.config.productionTip = false;
Vue.prototype.$api = function(service) {
  return ApiService[service];
};
Vue.prototype.$store = store;

Vue.use(Components);
Vue.use(Helper);
Vue.use(UniAsync);

App.mpType = 'app';

const app = new Vue({
  store,
  ...App
});
app.$mount();
