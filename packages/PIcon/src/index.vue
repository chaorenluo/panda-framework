<template>
  <i :class="'iconfont ' + name" />
</template>

<script>
export default {
  name: 'PIcon',
  props: {
    name: {
      type: String,
      default: ''
    }
  }
};
</script>
