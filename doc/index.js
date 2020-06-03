import Vue from 'vue';
import App from './index.vue';
import router from './router/index';
import '../packages/theme-chalk/src/index.scss';
import '../packages/theme-chalk/src/icon.scss';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
