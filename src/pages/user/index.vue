<style lang="scss" scpoed>
  .page {
    &__logout {
      padding: 16px;

      &__button {
        background-color: #ff761e;
        color: #fff;
        border: none;
      }
    }
  }
</style>

<template>
  <view class="page">
    <view class="page__logout">
      <button class="page__logout__button" :loading="isLogout" type="default" @tap="logout">退出登录</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isLogout: false
    };
  },
  computed: {},
  methods: {
    logout() {
      this.isLogout = true;
      uni.showLoading({ title: '退出登录中' });
      const params = { mobile: this.inputMobile, password: this.inputPassword };
      this.$api('app').post('/', params)
        .then(res => {
          uni.hideLoading();
          this.$store.commit('LOGOUT');
          this.isLogout = false;
          this.$helper.toPage('/user/auth');
        })
        .catch(error => {
          uni.hideLoading();
          this.$helper.print(error);
        });
    }
  }
};
</script>
