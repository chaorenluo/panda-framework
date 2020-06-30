import Button from '../packages/button/index';
import ButtonGroup from '../packages/button-group/index';
import Icon from '../packages/icon/index';
import Radio from '../packages/radio/index';
import RadioGroup from '../packages/radio-group/index';
import RadioButton from '../packages/radio-button/index';
import Checkbox from '../packages/checkbox/index';
import CheckboxGroup from '../packages/checkbox-group/index';
import CheckboxButton from '../packages/checkbox-button/index';
import Alert from '../packages/alert/index';

const components = {
  Button,
  ButtonGroup,
  Icon,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxGroup,
  CheckboxButton,
  Alert
};

const install = function (Vue, opts = {}) {
  // locale.use(opts.locale);
  // locale.i18n(opts.i18n);
  Object.values(components).forEach(component => {
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
}; ;
