<template>
  <div class="button-group">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'PButtonGroup',
  mounted () {
    for (let node of this.$el.children) {
      const name = node.nodeName.toLowerCase();
      if (name !== 'button') {
        console.warn(`n-button-group 的子元素应该全是 n-button，但是你写的是 ${name}`);
      }
    }
  }
};
</script>
