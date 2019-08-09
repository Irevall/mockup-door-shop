<template>
  <div class="app-navigation">
    <img class="app-navigation__logo" src="/logo.png"/>
    <navigation-language/>
    <navigation-organization/>
  </div>
</template>

<script>
  import NavigationLanguage from '@/components/navigation/navigation-language';
  import NavigationOrganization from '@/components/navigation/navigation-organization';
  export default {
    name: 'app-navigation',
    components: { NavigationOrganization, NavigationLanguage }
  };
</script>

<style lang="scss">
  .app-navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    box-shadow: 0 3px 6px 1px rgba(0, 0, 0, 0.16);
  }
</style>
