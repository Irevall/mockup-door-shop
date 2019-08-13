<template>
  <settings-setting>
    <template #title>
      {{ $t('selection:setting:door-color.title') }}
    </template>

    <template>
      <div class="settings-color">
        <div class="setting-color">
          <div class="setting-color__preview setting-color__preview--black"></div>
          <label class="radio-label">{{ $t('selection:setting:door-color.black') }}
            <input type="radio" class="radio-label__input" :checked="door.color === 1" @click="updateColor(1)"/>
            <span class="radio-label__new-radio"></span>
          </label>
        </div>

        <div class="setting-color">
          <div class="setting-color__preview setting-color__preview--gray"></div>
          <label class="radio-label">{{ $t('selection:setting:door-color.gray') }}
            <input type="radio" class="radio-label__input" :checked="door.color === 2" @click="updateColor(2)"/>
            <span class="radio-label__new-radio"></span>
          </label>
        </div>

        <div class="setting-color">
          <div class="setting-color__preview setting-color__preview--white"></div>
          <label class="radio-label">{{ $t('selection:setting:door-color.white') }}
            <input type="radio" class="radio-label__input" :checked="door.color === 3" @click="updateColor(3)"/>
            <span class="radio-label__new-radio"></span>
          </label>
        </div>
      </div>
    </template>
  </settings-setting>
</template>

<script>
  import { mapGetters } from 'vuex';
  import SettingsSetting from '@/components/selection/settings/settings-setting';

  export default {
    name: 'settings-color',
    components: { SettingsSetting },
    computed: {
      ...mapGetters({ door: 'door/door' })
    },
    methods: {
      updateColor(value) {
        this.$store.commit('door/updateDoor', { property: 'color', value });
      }
    }
  };
</script>

<style lang="scss">
  .setting-color {
    display: flex;
    flex-direction: column;
    width: 60px;

    &:not(:first-of-type) {
      margin-left: 20px;
    }
  }

  .setting-color__preview {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-bottom: 5px;

    &--black {
      background: black;
    }

    &--gray {
      background: #797474;
    }

    &--white {
      background: #F4F2F2;
    }
  }
</style>
