import Vue from 'vue/dist/vue.js';
import Panda from '../../src/index.js';

Vue.use(Panda);

let id = 0;

const createElm = function () {
  const elm = document.createElement('div');
  elm.id = 'app' + ++id;
  document.body.appendChild(elm);
};

function destroyVm (vm) {
  vm.$destroy && vm.$destroy();
  vm.$el &&
  vm.$el.parentNode &&
  vm.$el.parentNode.removeChild(vm.$el);
}

function createVue (component, mounted = false) {
  if (Object.prototype.toString.call(component) === '[object string]') {
    component = { template: component };
  }
  return new Vue(component).$mount(mounted === false ? null : createElm());
}

function getRenderedVm (component, propsData) {
  const Ctor = Vue.extend(component);
  const vm = new Ctor({ propsData }).$mount();
  return vm;
}

export { destroyVm, createVue, getRenderedVm };
