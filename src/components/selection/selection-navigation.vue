<template>
  <div class="selection-navigation">
    <div class="selection-navigation__step" v-for="(step, index) in steps" :key="step">
      <div class="step__indicator-wrapper" :class="{ 'step__indicator-wrapper--active': index === activeStep }">
        <div class="step__indicator-inner"></div>
      </div>
      <div class="step__text">
        <span class="step__index">step {{ index + 1 }}</span>
        <span class="step__description">{{ step }}</span>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'selection-navigation',
    props: {
      activeStep: {
        default: 0,
        type: Number,
      }
    },
    computed: {
      steps() {
        return this.$t('selection:navigation', { returnObjects: true });
      }
    }
  };
</script>

<style lang="scss">
  .selection-navigation {
    @include flex-center;
    padding-top: 22px;
  }

  .selection-navigation__step {
    position: relative;
    @include flex-center;
    flex-direction: column;

    &:not(:first-child) {
      margin-left: 100px;

      &:after {
        content: "";
        position: absolute;
        right: 50%;
        background: #F1F9FF;
        width: 150px;
        height: 2px;
        z-index: -1;
      }
    }
  }

  .step__indicator-wrapper {
    @include flex-center;
    height: 46px;
    width: 46px;
    background: #CDDBE5;
    border-radius: 50%;

    &--active {
      background: #95A3AD;

      .step__indicator-inner {
        background: #FFFFFF;
      }
    }
  }

  .step__indicator-inner {
    height: 6px;
    width: 6px;
    background: #6991B2;
    border-radius: 50%
  }

  .step__text {
    position: absolute;
    top: 100%;
    @include flex-center;
    flex-direction: column;
    margin-top: 10px;
    width: 150px;
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    color: #848C93;
  }
</style>
