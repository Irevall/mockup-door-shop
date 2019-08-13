<template>
  <settings-setting>
    <template #title>
      {{ $t('selection:setting:door-color.title') }}
    </template>

    <template>
      <div class="settings-color">
        <div class="setting-color" v-for="(color, index) in colorList">
          <div class="setting-color__preview" :class="[`setting-color__preview--${color}`]"></div>
          <label class="radio-label">{{ $t(`selection:setting:door-color.${color}`) }}
            <input type="radio" class="radio-label__input" :checked="door.color === index" @click="updateColor(index)"/>
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
  import { DoorColor } from '@/models/Door';

  export default {
    name: 'settings-color',
    components: { SettingsSetting },
    computed: {
      ...mapGetters({ door: 'door/door' }),
      colorList() {
         return Object.keys(DoorColor).map(color => color.toLowerCase());
      },
    },
    methods: {
      updateColor(value) {
        this.$store.commit('door/updateDoor', { property: 'color', value });
      }
    },
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
