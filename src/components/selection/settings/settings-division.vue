<template>
  <settings-setting>
    <template #title>
      {{ $t('selection:setting:door-division.title') }}
    </template>

    <template>
      <div class="setting-division">
        <span class="setting-division__property">{{ $t('selection:setting:door-division.beams') }}</span>
        <span class="setting-division__count">{{ door.beams }}</span>
        <div class="setting-division__buttons">
          <span class="setting-division__button"
                :class="{ 'setting-division__button--inactive': door.beams === 4 }"
                @click="updateBeams(1)"
          >+</span>
          <span class="setting-division__button"
                :class="{ 'setting-division__button--inactive': door.beams === 0 }"
                @click="updateBeams(-1)"
          >-</span>
        </div>
      </div>

      <div class="setting-division">
        <span class="setting-division__property">{{ $t('selection:setting:door-division.posts') }}</span>
        <span class="setting-division__count">{{ door.posts }}</span>
        <div class="setting-division__buttons">
          <span class="setting-division__button"
                :class="{ 'setting-division__button--inactive': door.posts === 4 }"
                @click="updatePosts(1)"
          >+</span>
          <span class="setting-division__button"
                :class="{ 'setting-division__button--inactive': door.posts === 0 }"
                @click="updatePosts(-1)"
          >-</span>
        </div>
      </div>
    </template>
  </settings-setting>
</template>

<script>
  import { mapGetters } from 'vuex'
  import SettingsSetting from '@/components/selection/settings/settings-setting';

  export default {
    name: 'settings-division',
    components: { SettingsSetting },
    computed: {
      ...mapGetters({ door: 'door/door' })
    },
    methods: {
      updateBeams(change) {
        this.$store.commit('door/updateDoor', { property: 'beams', value: this.door.beams + change })
      },
      updatePosts(change) {
        this.$store.commit('door/updateDoor', { property: 'posts', value: this.door.posts + change })
      }
    }
  };
</script>

<style lang="scss">
  .setting-division {

  }

  .setting-division__property {
    width: 140px;
  }

  .setting-division__count {
    padding: 2px 8px;
    border: 1px solid #A8A5A5;
    font-size: 12px;
  }

  .setting-division__buttons {
    display: flex;
  }

  .setting-division__button {
    width: 22px;
    padding: 2px 0;
    margin-left: 4px;
    background: #CDDBE5;
    font-size: 12px;
    text-align: center;
    cursor: pointer;

    &--inactive {
      cursor: no-drop;
    }
  }
</style>
