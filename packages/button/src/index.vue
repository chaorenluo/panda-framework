<template>
  <button
    type="button "
    :disabled="disabled"
    :class="`btn ${btnType} ${btnSize} ${btnDisableds} ${btnLoading}`"
    @click="$emit('click')"
  >
    <span
      v-if="loading"
      class="btn-spin"
    />

    <p-icon
      v-if="icon"
      :class="`${icon}`"
    />
    <span>
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'PButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      prefix: 'btn-'
    };
  },
  computed: {
    btnType () {
      return this.type ? this.prefix + this.type : '';
    },
    btnSize () {
      return this.size ? this.prefix + this.size : '';
    },
    btnDisableds () {
      return this.disabled ? 'btn-disabled' : '';
    },
    btnLoading () {
      return this.loading ? 'btn-loading' : '';
    }
  },
  mounted () {

  },
  methods: {

  }
};
</script>
