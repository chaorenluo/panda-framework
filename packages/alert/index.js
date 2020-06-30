import alert from './src/index.vue';

alert.install = function (Vue) {
  Vue.component(alert.name, alert);
};

export default alert;
