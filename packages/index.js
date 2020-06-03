import './../assets/font/iconfont.css';
import pButton from '../packages/PButton';
import pIcon from '../packages/PIcon';
import pButtonGroup from '../packages/PButtonGroup';

const components = {
  pButton,
  pButtonGroup,
  pIcon
};

const install = function (Vue, opts = {}) {
  Object.values(components).forEach(component => {
    Vue.component(component.name, component);
  });
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...components
};
