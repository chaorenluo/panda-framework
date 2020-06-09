<template>
  <component
    :is="_elTag"
    class="pa-radio-group"
    role="radiogroup"
  >
    <slot />
  </component>
</template>

<script>
import Emitter from '../../../src/mixins/emitter';

const keyCode = Object.freeze({
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
});
export default {
  name: 'PaRadioGroup',
  componentName: 'PaRadioGroup',

  inject: {
    elFormItem: {
      default: ''
    }
  },
  mixins: [Emitter],

  props: {
    value: {},
    size: String,
    fill: String,
    textColor: String,
    disabled: Boolean
  },

  computed: {
    _elFormItemSize () {
      return (this.elFormItem || {}).elFormItemSize;
    },
    _elTag () {
      return (this.$vnode.data || {}).tag || 'div';
    },
    radioGroupSize () {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    }
  },
  watch: {
    value (value) {
      this.dispatch('PaFormItem', 'Pa.form.change', [this.value]);
    }
  },
  created () {
    this.$on('handleChange', value => {
      this.$emit('change', value);
    });
  },
  mounted () {
    this.$nextTick(() => {
      console.log(this.names);
    });
    // 当radioGroup没有默认选项时，第一个可以选中Tab导航
    const radios = this.$el.querySelectorAll('[type=radio]');
    const firstLabel = this.$el.querySelectorAll('[role=radio]')[0];
    console.log(firstLabel);
    if (![].some.call(radios, radio => radio.checked) && firstLabel) {
      firstLabel.tabIndex = 0;
    }
  }
};
</script>

<style>

</style>
