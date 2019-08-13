<template>
  <settings-setting>
    <template #title>
      {{ $t('selection:setting:door-type.title') }}
    </template>

    <template>
      <div class="settings-type">
        <label class="settings-type__container">{{ $t('selection:setting:door-type.single') }}
          <input type="radio" name="door-type" id="single-door" :checked="door.type === 1" @click="updateType(1)"/>
          <span class="settings-type__checkmark"></span>
        </label>
      </div>

      <div class="settings-type">
        <label class="settings-type__container">{{ $t('selection:setting:door-type.double') }}
          <input type="radio" name="door-type" id="double-door" :checked="door.type === 2" @click="updateType(2)"/>
          <span class="settings-type__checkmark"></span>
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
