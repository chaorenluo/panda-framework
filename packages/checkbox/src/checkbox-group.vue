<script>
import Emitter from '../../../src/mixins/emitter';

export default {
  name: 'PaCheckboxGroup',

  componentName: 'PaCheckboxGroup',

  mixins: [Emitter],

  inject: {
    elFormItem: {
      default: ''
    }
  },

  props: {
    value: {},
    disabled: Boolean,
    min: Number,
    max: Number,
    size: String,
    fill: String,
    textColor: String
  },

  computed: {
    _elFormItemSize () {
      return (this.elFormItem || {}).elFormItemSize;
    },
    checkboxGroupSize () {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    }
  },

  watch: {
    value (value) {
      console.log('--1');
      this.dispatch('ElFormItem', 'el.form.change', [value]);
    }
  }
};
</script>

<template>
  <div
    class="pa-checkbox-group"
    role="group"
    aria-label="checkbox-group"
  >
    <slot />
  </div>
</template>
