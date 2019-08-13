<template>
  <settings-setting>
    <template #title>
      {{ $t('selection:setting:door-type.title') }}
    </template>

    <template>
      <div class="settings-type">
        <label class="radio-label">{{ $t('selection:setting:door-type.single') }}
          <input type="radio" class="radio-label__input" :checked="door.type === 1" @click="updateType(1)"/>
          <span class="radio-label__new-radio"></span>
        </label>
      </div>

      <div class="settings-type">
        <label class="radio-label">{{ $t('selection:setting:door-type.double') }}
          <input type="radio" class="radio-label__input" :checked="door.type === 2" @click="updateType(2)"/>
          <span class="radio-label__new-radio"></span>
        </label>
      </div>
    </template>
  </settings-setting>
</template>

<script>
  import { mapGetters } from 'vuex'
  import SettingsSetting from '@/components/selection/settings/settings-setting';

  export default {
    name: 'settings-type',
    components: { SettingsSetting },
    computed: {
      ...mapGetters({ door: 'door/door' })
    },
    methods: {
      updateType(value) {
        this.$store.commit('door/updateDoor', { property: 'type', value })
      }
    }
  };
</script>

<style lang="scss">

</style>
