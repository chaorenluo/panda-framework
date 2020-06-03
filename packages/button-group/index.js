import ButtonGroup from './src/index.vue';

ButtonGroup.install = function (Vue) {
  Vue.component(ButtonGroup.name, ButtonGroup);
};

export default ButtonGroup;
