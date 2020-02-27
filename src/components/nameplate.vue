<style lang="scss" scoped>
  .nameplate {
    display: flex;
    flex-flow: row nowrap;
    color: #666;

    &__main {
      font-size: 16px;
      letter-spacing: 1px;
      color: $color-theme;
      padding-bottom: 8px;
      border-bottom: 2px solid $color-theme;
    }

    &__action {

    }
  }
</style>

<template>
  <view class="nameplate">
    <view class="nameplate__main">
      <slot name="name"></slot>
    </view>
    <view class="nameplate__action">
      <slot name="action"></slot>
    </view>
  </view>
</template>

<script>
export default {
  props: {},
  data() {
    return {
    };
  },
  methods: {}
};
</script>
