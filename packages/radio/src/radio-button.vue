<template>
  <label
    class="pa-radio-button"
    :class="[
      size ? 'pa-radio-button--' + size : '',
      { 'is-active': value === label },
      { 'is-disabled': isDisabled },
      { 'is-focus': focus }
    ]"
    role="radio"
    :aria-checked="value === label"
    :aria-disabled="isDisabled"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="value = isDisabled ? value : label"
  >
    111
    <input
      v-model="value"
      class="pa-radio-button__orig-radio"
      :value="label"
      type="radio"
      :name="name"
      :disabled="isDisabled"
      tabindex="-1"
      @change="handleChange"
      @focus="focus = true"
      @blur="focus = false"
    >
    <span
      class="pa-radio-button__inner"
      :style="value === label ? activeStyle : null"
      @keydown.stop
    >

      <slot />
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>
<script>
import Emitter from '../../../src/mixins/emitter';

export default {
  name: 'PaRadioButton',

  mixins: [Emitter],

  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },

  props: {
    label: {},
    disabled: Boolean,
    name: String
  },
  data () {
    return {
      focus: false
    };
  },
  computed: {

    value: {
      get () {
        return this._radioGroup.value;
      },
      set (value) {
        this._radioGroup.$emit('input', value);
      }
    },
    _radioGroup () {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== 'PaRadioGroup') {
          parent = parent.$parent;
        } else {
          return parent;
        }
      }
      return false;
    },
    activeStyle () {
      return {
        backgroundColor: this._radioGroup.fill || '',
        borderColor: this._radioGroup.fill || '',
        boxShadow: this._radioGroup.fill ? `-1px 0 0 0 ${this._radioGroup.fill}` : '',
        color: this._radioGroup.textColor || ''
      };
    },
    _elFormItemSize () {
      return (this.elFormItem || {}).elFormItemSize;
    },
    size () {
      return this._radioGroup.radioGroupSize || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
    isDisabled () {
      return this.disabled || this._radioGroup.disabled || (this.elForm || {}).disabled;
    },
    tabIndex () {
      return (this.isDisabled || (this._radioGroup && this.value !== this.label)) ? -1 : 0;
    }
  },

  methods: {
    handleChange () {
      this.$nextTick(() => {
        this.dispatch('PaRadioGroup', 'handleChange', this.value);
      });
    }
  }
};
</script>
