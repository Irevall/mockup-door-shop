<template>
  <div class="app-home">
    <selection-navigation :step="step"/>
    <div class="app-home__content-wrapper">
    <div class="app-home__content">
      <selection-preview :door="door"/>
      <div class="app-home__settings">
        <div class="app-home__setting app-home__setting--step1">
          <settings-type :door="door"/>
          <settings-size :door="door"/>
        </div>

        <div class="app-home__step-buttons">
          <span class="app-home__step-button app-home__step-button--back" v-if="step !== 0" @click="step--">
            {{ $t('selection:back') }}
          </span>

          <span class="app-home__step-button app-home__step-button--next" @click="step++">
            {{ $t('selection:next-step') }}
          </span>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import SelectionNavigation from '@/components/selection/selection-navigation';
  import SelectionPreview from '@/components/selection/selection-preview';
  import SettingsType from '@/components/selection/settings/settings-type';
  import SettingsSize from '@/components/selection/settings/settings-size';

  export default {
    name: 'app-home',
    components: { SettingsSize, SettingsType, SelectionNavigation, SelectionPreview },
    data() {
      return {
        step: 0,
      }
    },
    computed: {
      ...mapGetters({ door: 'door/door' })
    },
    created() {
      console.log(this.door);
    }
  };
</script>

<style lang="scss">
  .app-home__content {
    @include flex-center;
  }

  .app-home__content {
    display: grid;
    grid-template-columns: auto auto;
    padding-top: 60px;
  }

  .app-home__settings {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 10px;
    margin-left: 30px;
    height: calc(100% - 10px);
  }

  .app-home__single-setting {
    display: flex;
    align-items: center;

    &:not(:first-of-type) {
      margin-top: 5px;
    }
  }

  .app-home__step-buttons {
    display: flex;
  }

  .app-home__step-button {
    width: 130px;
    padding: 5px 0;
    border: 2px solid #6F91AA;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;

    &--back {
      color: #6F91AA;
    }

    &--next {
      background: #6F91AA;
      color: #FFFFFF;
    }

    &:not(:first-of-type) {
      margin-left: 15px;
    }
  }
</style>
