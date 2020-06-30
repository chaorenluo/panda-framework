import CheckboxButton from '../checkbox/src/checkbox-button.vue';

/* istanbul ignore next */
CheckboxButton.install = function (Vue) {
  Vue.component(CheckboxButton.name, CheckboxButton);
};

export default CheckboxButton;
