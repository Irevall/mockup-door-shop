<template>
  <div class="applover">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'applover',
    data: function() {
      return {
      }
    },
  }
</script>

<style lang="scss">
  @import '@/assets/style/global.scss';

  .applover {
    display: grid;
    grid-template-rows: auto;
  }
</style>
