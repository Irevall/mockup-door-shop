<template>
  <div class="navigation-language">
    <span class="navigation-language__select-text">{{ $t('navigation:select-language') }}:</span>

    <div class="navigation-language__dropdown"  @click="toggle">
      <div class="dropdown__header">
        <span class="dropdown__item">{{ language.name }}</span>
        <img class="dropdown__icon" src="/angle-down.svg"/>
      </div>

      <div class="dropdown__list" :class="{ 'dropdown__list--active': isActive }">
        <span class="dropdown__item" v-for="language of languageList" :key="language.code" @click="selectLanguage(language)">{{ language.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'navigation-language',
    data () {
      return {
        isActive: false,
        languages: {
          pl: { code: 'pl', name: 'Polski' },
          en: { code: 'en', name: 'English' },
        },
      }
    },
    computed: {
      language() {
        return this.languages[this.$i18n.i18next.language];
      },
      languageList() {
        return [...Object.values(this.languages).filter(language => language !== this.language)];
      }
    },
    methods: {
      async selectLanguage(language) {
        await this.$i18n.i18next.changeLanguage(language.code);
        this.isActive = false;
      },
      toggle() {
        this.isActive = !this.isActive;
      },
    }
  };
</script>

<style lang="scss">
  .navigation-language {
    @include flex-center;
  }

  .navigation-language__dropdown {
    display: flex;

    position: relative;
    width: 90px;
    margin-left: 20px;

    color: #7E7E7E;
    border: 1px solid #909090;
    box-sizing: content-box;
    border-radius: 3px;

    &--active {
      overflow: visible;
    }
  }

  .dropdown__header {
    display: flex;
    align-items: center;
  }

  .dropdown__icon {
    position: absolute;
    right: 6px;
    height: 14px;
  }

  .dropdown__list {
    border: 1px solid #909090;
    border-radius: 3px;
    box-sizing: border-box;

    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    opacity: 0;
    transition: opacity .3s ease-out;

    > .dropdown__item:not(:last-of-type) {
      border-bottom: 1px solid #909090;
    }

    &--active {
      opacity: 1;
    }
  }

  .dropdown__item {
    padding: 6px 12px;
    background: white;
  }
</style>
