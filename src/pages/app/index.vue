<style lang="scss" scoped>
.page {
}
</style>

<template>
	<view class="page">
		<app-box></app-box>
	</view>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    };
  },
  onLoad() {
  },
  methods: {
    enterPage(url) {
      uni.navigateTo({
        url,
        success: res => {},
        fail: () => {},
        complete: () => {}
      });
    }
  }
};
</script>
