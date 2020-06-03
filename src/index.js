import Button from '../packages/button';
import Icon from '../packages/icon';
import ButtonGroup from '../packages/button-group';
// import locale from './locale/index';

const components = {
  Button,
  ButtonGroup,
  Icon
};

const install = function (Vue, opts = {}) {
  // locale.use(opts.locale);
  // locale.i18n(opts.i18n);
  Object.values(components).forEach(component => {
    console.log(component.name);
    Vue.component(component.name, component);
  });
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  // locale: locale.use,
  // i18n: locale.i18n,
  install,
  ...components
};
