<template>
  <div class="applover">
    <app-navigation/>
    <router-view/>
  </div>
</template>

<script>
  import AppNavigation from '@/components/app-navigation';

  export default {
    name: 'applover',
    components: { AppNavigation },
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
