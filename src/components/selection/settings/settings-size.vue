<template>
  <settings-setting>
    <template #title>
      {{ $t('selection:setting:door-size.title') }}
    </template>

    <template>
      <div class="settings-size">
        <label for="width">{{ $t('selection:setting:door-size.width') }}</label>
        <input type="number" id="width" v-model="dimensions.width" @change="updateSize('width')" min="0" max="160" v-validate/>
        <span>cm</span>
      </div>

      <div class="settings-size">
        <label for="height">{{ $t('selection:setting:door-size.height') }}</label>
        <input type="number" id="height" v-model="dimensions.height" @change="updateSize('height')" min="0" max="300"/>
        <span>cm</span>
      </div>
    </template>
  </settings-setting>
</template>

<script>
  import { mapGetters } from 'vuex'
  import SettingsSetting from '@/components/selection/settings/settings-setting';

  export default {
    name: 'settings-size',
    components: { SettingsSetting },
    data() {
      return {
        dimensions: {
          width: null,
          height: null,
        },
      }
    },
    computed: {
      ...mapGetters({ door: 'door/door' })
    },
    created() {
      this.dimensions.width = this.door.width;
      this.dimensions.height = this.door.height;
    },
    methods: {
      async updateSize(property) {
        const valid = await this.$validator.validateAll();
        if (!valid) return;

        this.$store.commit('door/updateDoor', { property, value: this.dimensions[property] })
      },
    }
  };
</script>

<style lang="scss">
  .settings-size {
    > label {
      width: 75px;
    }

    > input {
      width: 40px;
      padding: 3px 6px;
      margin-right: 8px;
      font-size: 12px;
      border-color: #A8A5A5;
    }

    > span {
      font-size: 12px;
    }
  }
</style>
