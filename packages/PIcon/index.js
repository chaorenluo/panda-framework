import npIcon from './src/index.vue';

npIcon.install = function (Vue) {
  Vue.component(npIcon.name, npIcon);
};

export default npIcon;
