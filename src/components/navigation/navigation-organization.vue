<template>
  <div class="navigation-organization">
    <div class="navigation-organization__header">
      <span>{{ $t('navigation:my-organization')}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'navigation-organizaation'
  };
</script>

<style lang="scss">
  .navigation-organization__header {
    padding: 5px 8px;
    background: #77779D;
    border-radius: 3px;
    color: #FFFFFF;

  }
</style>
