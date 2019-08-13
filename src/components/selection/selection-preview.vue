<template>
  <div class="selection-preview">
    <div class="selection-preview__door-wrapper">
      <div class="selection-preview__door" v-for="doorIndex in door.type" :style="{ width: `${door.width}px`, height: `${door.height}px` }">
        <div class="door__beams">
          <div class="door__beam" v-for="beamIndex in beams"></div>
        </div>

        <div class="door__posts">
          <div class="door__post" v-for="postIndex in posts"></div>
        </div>

        <div class="selection-preview__dimension selection-preview__dimension--width selection-preview__dimension--bottom">
          <span>{{ door.width }}</span>
        </div>
      </div>

      <div class="selection-preview__dimensions">
        <div class="selection-preview__dimension selection-preview__dimension--width selection-preview__dimension--top">
          <span>{{ combinedWidth }}</span>
        </div>

        <div class="selection-preview__dimension selection-preview__dimension--height selection-preview__dimension--left">
          <span>{{ door.height }}</span>
        </div>
      </div>
    </div>

    <div class="selection-preview__view-selection">
      <div class="selection-preview__view" :class="{ 'selection-preview__view--active': view3d }" @click="view3d = true">
        <span>3D</span>
      </div>

      <div class="selection-preview__view" :class="{ 'selection-preview__view--active': !view3d }" @click="view3d = false">
        <span>2D</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { Door } from '@/models/Door';

  export default {
    name: 'selection-preview',
    props: {
      door: Door
    },
    data() {
      return {
        view3d: false,
      }
    },
    computed: {
      beams() {
        return this.door.beams + 2;
      },
      posts() {
        return this.door.posts + 2;
      },
      combinedWidth() {
        return this.door.type * this.door.width;
      }
    }
  };
</script>

<style lang="scss">
  .selection-preview {
    position: relative;
    width: 590px;
    height: 470px;
    border: 1px solid #E6E6E6;
  }

  .selection-preview__door-wrapper {
    position: absolute;
    display: flex;
    flex-direction: row;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .selection-preview__door {
    position: relative;

    --door-color: #5A5858;
    --door-inner-size: 7px;

    &:not(:first-of-type) {
      margin-left: 5px;
    }
  }

  .door__beams, .door__posts {
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }

  .door__beams {
    flex-direction: column;
  }

  .door__posts {
    flex-direction: row;
  }

  .door__beam {
    width: 100%;
    height: var(--door-inner-size);
    background: var(--door-color);
  }

  .door__post {
    width: var(--door-inner-size);
    height: 100%;
    background: var(--door-color);
  }

  .selection-preview__dimension {
    position: absolute;
    @include flex-center;
    box-sizing: border-box;

    &:after {
      content: "";
      position: absolute;
      background: #707070;

      z-index: -1;
    }

    > span {
      border: 1px solid #707070;
      padding: 0 6px;
      font-size: 12px;
      line-height: 1;
      background: white;
    }

    &--width {
      left: 0;
      width: 100%;
      height: 14px;
      margin: 10px 0;
      border-left: 2px solid #707070;
      border-right: 2px solid #707070;

      &:after {
        top: 50%;
        width: 100%;
        height: 1px;
      }
    }

    &--height {
      top: 0;
      width: 14px;
      height: 100%;
      margin: 0 20px;
      border-top: 2px solid #707070;
      border-bottom: 2px solid #707070;

      &:after {
        left: 50%;
        height: 100%;
        width: 1px;
      }
    }

    &--top {
      bottom: 100%;
    }

    &--left {
      right: 100%;

    }

    &--bottom {
      top: 100%;
    }
  }

  .selection-preview__view-selection {
    position: absolute;
    right: 30px;
    top: 20px;
    @include flex-center;
    color: #6E95B5;
    border: 1px solid #6E95B5;
  }

  .selection-preview__view {
    padding: 1px 8px;
    background: #cbcbcb;
    cursor: pointer;

    &--active {
      background: white;
      border: 2px solid #6E95B5;
    }

    &:not(&--active) {
      border: 1px solid #cbcbcb;
      outline: 1px solid #6E95B5;
    }
  }
</style>
