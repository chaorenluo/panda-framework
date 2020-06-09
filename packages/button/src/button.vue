<template>
  <button
    class="pa-button"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? `pa-button--${type}` : '',
      buttonSize ? `pa-button--${buttonSize}` : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]"
    @click="hanleClick"
  >
    <i
      v-if="loading"
      class="pa-icon-loading"
    />
    <i
      v-if="icon && !loading"
      :class="icon"
    />
    <span v-if="$slots.default"> <slot /></span>
  </button>
</template>

<script>
export default {
  name: 'PaButton',
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: 'button'
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },
  computed: {
    _elFormItemSize () {
      return (this.elFormItem || {}).elFormItemSize;
    },
    buttonSize () {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
    buttonDisabled () {
      return this.disabled || (this.elForm || {}).disabled;
    }
  },
  methods: {
    hanleClick (evt) {
      this.$emit('click', evt);
    }
  }

};
</script>
