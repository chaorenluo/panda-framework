import Icon from './src/index.vue';

Icon.install = function (Vue) {
  Vue.component(Icon.name, Icon);
};

export default Icon;
