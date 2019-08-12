<template>
  <div class="selection-setting">
    <div class="selection-setting__header">
      <span>{{ title }}</span>
    </div>
    <div class="selection-setting__options">
      <slot class="selection-setting__option"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'selection-setting',
    props: {
      title: String,
    }
  };
</script>

<style lang="scss">
  .selection-setting {
    margin-left: 30px;
  }

  .selection-setting__header {
    min-width: 150px;
    border-bottom: 1px solid #F7F7F7;
    padding: 5px 0;
  }

  .selection-setting__options {
    display: flex;
    flex-direction: column;
    padding: 5px 0;
  }
</style>
