<template>
  <a
    :class="['pa-link',
             type ? `pa-link--${type}` : '',
             disabled && 'is-disabled',
             underline && !disabled && 'is-underline'
    ]"
    :href="disabled ? null : href"
    v-bind="$attrs"
    @click="handleClick"
  >
    <i
      v-if="icon"
      :class="icon"
    />
    <span
      v-if="$slots.default"
      class="pa-link--inner"
    >
      <slot />
    </span>
    <template v-if="$slots.icon"><slot
      v-if="$slots.icon"
      name="icon"
    /></template>

  </a>
</template>

<script>
export default {
  name: 'PaLink',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    underline: {
      type: Boolean,
      default: true
    },
    disabled: Boolean,
    href: String,
    icon: String
  },
  methods: {
    handleClick (event) {
      if (!this.disabled) {
        if (!this.href) {
          this.$emit('click', event);
        }
      }
    }
  }
};
</script>
