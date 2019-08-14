<template>
  <main>
    <app-navigation/>
    <router-view/>
  </main>
</template>

<script>
  import AppNavigation from '@/components/app-navigation';

  export default {
    name: 'view-layout',
    components: { AppNavigation  },
  };
</script>

<style lang="scss">
  main {
    position: relative;
    min-height: 100vh;
  }
</style>
