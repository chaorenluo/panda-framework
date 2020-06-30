import Link from './src/index.vue';

Link.install = function (Vue) {
  Vue.component(Link.name, Link);
};

export default Link;
