<template>
  <settings-setting>
    <template #title>
      {{ $t('selection:setting:door-type.title') }}
      <img class="settings-type__icon" src="/icon.svg" @click="showModal = true"/>
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

        <div class="settings-type__modal-wrapper" v-if="showModal">
          <div class="settings-type__modal">
            <div class="settings-type__modal-title">{{ $t('selection:setting:door-type.title') }}</div>
            <div class="settings-type__door-types">
              <div class="settings-type__door-type">
                <span class="settings-type__door-type-title">{{ $t('selection:setting:door-type.single') }}</span>
                <div class="settings-type__door-type-representation">
                  <div class="settings-type__mini-door"></div>
                </div>
              </div>

              <div class="settings-type__door-type">
                <span class="settings-type__door-type-title">{{ $t('selection:setting:door-type.double') }}</span>
                <div class="settings-type__door-type-representation">
                  <div class="settings-type__mini-door"></div>
                  <div class="settings-type__mini-door"></div>
                </div>
              </div>
            </div>
            <div class="settings-type__modal-hide" @click="showModal = false"></div>
          </div>
        </div>
      </div>
    </template>
  </settings-setting>
</template>

<script>
  import { mapGetters } from 'vuex';
  import SettingsSetting from '@/components/selection/settings/settings-setting';

  export default {
    name: 'settings-type',
    components: { SettingsSetting },
    data() {
      return {
        showModal: false,
      }
    },
    computed: {
      ...mapGetters({ door: 'door/door' })
    },
    methods: {
      updateType(value) {
        this.$store.commit('door/updateDoor', { property: 'type', value });
      }
    }
  };
</script>

<style lang="scss">
  .settings-type__icon {
    height: 10px;
    margin-left: 4px;
    cursor: pointer;
  }

  .settings-type__modal-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    @include flex-center;
    height: 100%;
    width: 100%;
    background: rgba(#ADB2B5, 0.6);
    backdrop-filter: blur(5px);
  }

  .settings-type__modal {
    position: relative;
    width: 800px;
    padding: 20px;
    background: white;
    border: 1px solid #7998B0;
    color: #6F91AA;
  }

  .settings-type__modal-title {
    width: 80%;
    padding-bottom: 5px;
    margin-bottom: 30px;
    font-size: 24px;
    border-bottom: 2px solid #6F91AA;
  }

  .settings-type__door-types {
    display: flex;
    justify-content: space-evenly;
  }

  .settings-type__door-type {
    @include flex-center;
    flex-direction: column;
  }

  .settings-type__door-type-title {
    font-size: 18px;
    margin-bottom: 15px;
    color: #7998B0;
  }

  .settings-type__door-type-representation {
    display: flex;
  }

  .settings-type__mini-door {
    height: 60px;
    width: 40px;
    border: 4px dimgray solid;

    &:not(:first-of-type) {
      margin-left: 5px;
    }
  }

  .settings-type__modal-hide {
    position: absolute;
    top: 20px;
    right: 30px;
    height: 20px;
    width: 12px;
    padding-left: 10px;
    cursor: pointer;

    &:before, &:after {
      @include pseudo;
      height: 20px;
      width: 2px;
      background: #6F91AA;
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }
  }
</style>
