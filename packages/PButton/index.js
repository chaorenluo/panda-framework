import PButton from './src/index.vue';
PButton.install = function (Vue) {
  console.log(PButton.name);
  Vue.component(PButton.name, PButton);
};

export default PButton;
