<template>
  <settings-setting>
    <template #title>
      {{ $t('selection:setting:door-color.title') }}
    </template>

    <template>
      <div class="settings-color">
        <div class="setting-color">
          <div class="setting-color__preview setting-color__preview--black"></div>
          <label class="settings-type__container">{{ $t('selection:setting:door-color.black') }}
            <input type="radio" name="door-type" :checked="door.color === 1" @click="updateColor(1)"/>
            <span class="settings-type__checkmark"></span>
          </label>
        </div>

        <div class="setting-color">
          <div class="setting-color__preview setting-color__preview--gray"></div>
          <label class="settings-type__container">{{ $t('selection:setting:door-color.gray') }}
            <input type="radio" name="door-type" :checked="door.color === 2" @click="updateColor(2)"/>
            <span class="settings-type__checkmark"></span>
          </label>
        </div>

        <div class="setting-color">
          <div class="setting-color__preview setting-color__preview--white"></div>
          <label class="settings-type__container">{{ $t('selection:setting:door-color.white') }}
            <input type="radio" name="door-type" :checked="door.color === 3" @click="updateColor(3)"/>
            <span class="settings-type__checkmark"></span>
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

  .settings-type__container {
    display: flex;
    position: relative;
    padding-left: 20px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default radio button */
  .settings-type__container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  /* Create a custom radio button */
  .settings-type__checkmark {
    position: absolute;
    top: 50%;
    left: 0;
    height: 15px;
    width: 15px;
    box-sizing: border-box;
    background-color: #FFFFFF;
    border: 3px solid #CDDBE5;
    /*outline: 3px solid #CDDBE5;*/
    border-radius: 50%;
    transform: translateY(-60%);
  }

  /* On mouse-over, add a grey background color */
  .settings-type__container:hover input ~ .settings-type__checkmark {
    background-color: #f0f0f0;
  }

  /* When the radio button is checked, add a blue background */
  .settings-type__container input:checked ~ .settings-type__checkmark {
    background-color: #6991b2;
  }

  /* Create the indicator (the dot/circle - hidden when not checked) */
  .settings-type__checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the indicator (dot/circle) when checked */
  .settings-type__container input:checked ~ .settings-type__checkmark:after {
    display: block;
  }

  /* Style the indicator (dot/circle) */
  .settings-type__container .settings-type__checkmark:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
</style>
