import nButtons from './src/index.vue';

nButtons.install = function (Vue) {
  Vue.component(nButtons.name, nButtons);
};

export default nButtons;
