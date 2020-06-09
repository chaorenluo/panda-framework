<template>
  <i :class="'pa-icon-' + icon" />
</template>

<script>
export default {
  name: 'PaIcon',
  props: {
    icon: {
      type: String,
      default: ''
    }
  }
};
</script>
