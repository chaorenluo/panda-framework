import ButtonGroup from '../button/src/button-group.vue';

ButtonGroup.instance = function (Vue) {
  Vue.component(ButtonGroup.name, ButtonGroup);
};
export default ButtonGroup;
