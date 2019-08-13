<template>
  <div class="navigation-organization">
    <div class="navigation-organization__header">
      <span>{{ $t('navigation:my-organization') }}</span>
      <div class="navigation-organization__information" v-if="organization">
        <div class="navigation-organization__arrow"></div>
        <div class="navigation-organization__text">
          <span>{{ $t('navigation:organization.title') }}</span>
          <span v-for="[key, value] in organizationInfo">{{ $t(`navigation:organization.${key}`) }}: {{ value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { kebabCase } from 'lodash-es'

  export default {
    name: 'navigation-organization',
    computed: {
      ...mapGetters({ organization: 'user/organization' }),
      organizationInfo() {
        return Object.entries(this.organization).map(([key, value]) => {
          if (key !== 'id' && value) return [kebabCase(key), value];
        }).filter(pair => pair)
      }
    },
  };
</script>

<style lang="scss">
  .navigation-organization__header {
    position: relative;
    padding: 5px 8px;
    background: #77779D;
    border-radius: 3px;
    color: #FFFFFF;
    cursor: default;

    &:hover > .navigation-organization__information {
      opacity: 1;
      visibility: visible;
    }
  }

  .navigation-organization__information {
    position: absolute;
    top: 100%;
    right: 0;
    display: flex;
    flex-direction: column;
    visibility: hidden;
    height: auto;
    width: 300px;
    padding-top: 15px;
    color: #7E7E7E;
    filter: drop-shadow(0 0 5px rgba(black, 0.3));
    opacity: 0;
    transition: opacity .5s;

  }

  .navigation-organization__arrow {
    align-self: flex-end;
    margin-right: 30px;
    height: 20px;
    width: 20px;
    bottom: 100%;
    background: white;
    clip-path: polygon(50% 30%, 100% 100%, 0 100%);
  }

  .navigation-organization__text {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: white;
  }
</style>
