<template>
  <label
    role="radio"
    class="pa-radio"
    :class="[
      border && radioSize ? 'pa-radio--'+'radioSize' : '',
      {
        'is-disabled':isDisabled,
      },
      {'is-focus':focus},
      {'is-bordered':border},
      {'is-checked':model==label}

    ]"
    @keydown.space.stop.prevent="model = isDisabled ? model : label"
  >
    <span
      class="pa-radio__input"
      :class="{
        'is-disabled': isDisabled,
        'is-checked': model === label
      }"
    >
      <span class="pa-radio__inner" />
      <input
        ref="radio"
        v-model="model"
        class="pa-radio__original"
        type="radio"
        aria-hidden="true"
        :aria-checked="model === label"
        :aria-disabled="isDisabled"
        :tabindex="tabIndex"
        :disabled="isDisabled"
        :value="label"
        @change="handleChange"
        @focus="focus = true"
        @blur="focus = false"
      >
    </span>
    <span
      class="pa-radio__label"
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
  name: 'PaRadio',
  componentName: 'PaRadio',
  mixins: [Emitter],
  props: {
    value: {},
    label: {},
    disabled: Boolean,
    name: String,
    border: Boolean,
    size: String
  },
  inject: {
    elForm: {
      default: ''
    },

    elFormItem: {
      default: ''
    }
  },
  data () {
    return {
      focus: false
    };
  },
  computed: {
    model: {
      get () {
        return this.isGroup ? this._radioGroup.value : this.value;
      },
      set (val) {
        if (this.isGroup) {
          this.dispatch('PaRadioGroup', 'input', [val]);
        } else {
          this.$emit('input', val);
        }
        this.$refs.radio && (this.$refs.radio.checked = this.model === this.label);
      }
    },
    isDisabled () {
      return this.isGroup ? this._radioGroup.disabled || this.disabled || (this.elForm || {}).disabled : this.disabled || (this.elForm || {}).disabled;
    },
    tabIndex () {
      return (this.isDisabled || (this.isGroup && this.model !== this.label)) ? -1 : 0;
    },
    _elFormItemSize () {
      return (this.elFormItem || {}).elFormItemSize;
    },
    radioSize () {
      const temRadioSize = this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
      return this.isGroup ? this._radioGroup.radioGroupSize || temRadioSize : temRadioSize;
    },
    isGroup () {
      let parent = this.$parent;// 父实例没有就是自己
      // 遍历自己的父实例判断是否被PaRadioGroup包裹
      while (parent) {
        if (parent.$options.componentName !== 'PaRadioGroup') {
          parent = parent.$parent;
        } else {
          this._radioGroup = parent;
          return true;
        }
      }
      return false;
    }
  },
  mounted () {

  },
  methods: {
    handleChange () {
      this.$nextTick(() => {
        this.$emit('change', this.model);
        this.isGroup && this.dispatch('PaRadioGroup', 'handleChange', this.model);
      });
    }
  }
};
</script>
