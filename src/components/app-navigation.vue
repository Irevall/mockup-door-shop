<template>
  <div class="app-navigation">
    <img class="app-navigation__logo" src="/logo.png"/>
    <navigation-language class="app-navigation__language"/>
    <navigation-organization class="app-navigation__organization"/>
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
    justify-content: flex-end;
    align-items: center;
    padding: 18px 64px;
    box-shadow: 0 3px 6px 1px rgba(0, 0, 0, 0.16);
  }

  .app-navigation__logo {
    margin-left: 40px;
    margin-right: auto;
  }

  .app-navigation__organization {
    margin-left: 20px;
  }
</style>
