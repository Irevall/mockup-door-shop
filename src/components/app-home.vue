<template>
  <div class="app-home">
    <selection-navigation :step="step"/>
    <div class="app-home__content">
      <selection-preview :door="door"/>
      <div class="app-home__settings">
        <div class="app-home__setting app-home__setting--step1">
          <selection-setting :title="$t('selection:setting:door-type.title')">
            <div class="app-home__single-setting">
              <input type="radio" name="door-type" id="single-door" v-model="door.type" v-bind:value="1">
              <label for="single-door">{{ $t('selection:setting:door-type.single') }}</label>
            </div>

            <div class="app-home__single-setting">
              <input type="radio" name="door-type" id="double-door" v-model="door.type" v-bind:value="2">
              <label for="double-door">{{ $t('selection:setting:door-type.double') }}</label>
            </div>
        </selection-setting>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import SelectionNavigation from '@/components/selection/selection-navigation';
  import SelectionPreview from '@/components/selection/selection-preview';
  import SelectionSetting from '@/components/selection/selection-setting';

  export default {
    name: 'app-home',
    components: { SelectionSetting, SelectionNavigation, SelectionPreview },
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
    flex-direction: row;
    margin-top: 160px;
  }

  .app-home__settings {
    display: flex;
    align-self: flex-start;
    margin-top: 10px;
  }

  .app-home__single-setting {
    display: flex;
    align-items: center;

    &:not(:first-of-type) {
      margin-top: 5px;
    }
  }

  input[type="radio"] {
    margin: 0;
    background: white;
    border: none;
  }
</style>
