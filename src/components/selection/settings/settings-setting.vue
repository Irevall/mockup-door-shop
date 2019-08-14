<template>
  <div class="settings-setting">
    <div class="settings-setting__header">
      <slot name="title"></slot>
    </div>

    <div class="settings-setting__options">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'settings-setting',
  };
</script>

<style lang="scss">
  .settings-setting {
    width: 300px;
    margin-bottom: 30px;
  }

  .settings-setting__header {
    display: flex;
    width: 150px;
    border-bottom: 1px solid #F7F7F7;
    padding: 5px 0;
  }

  .settings-setting__options {
    display: flex;
    flex-direction: column;
    padding: 10px 0;

    > * {
      display: flex;
      align-items: center;

      &:not(:first-of-type) {
        margin-top: 5px;
      }
    }
  }
</style>
