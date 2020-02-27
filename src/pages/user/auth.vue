<style lang="scss" scoped>
  .page {
    &__header {
      display: flex;
      flex-flow: column nowrap;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 80px 16px;
      @include background-gradient();

      &__text1 {
        letter-spacing: 2px;
        font-size: 32px;

        small {
          margin-left: 8px;
          font-size: 24px;
          opacity: .9;
        }
      }

      &__text2 {
        letter-spacing: 1px;
        margin-top: 10px;
        opacity: .8;
        font-size: 12px;
      }

    }

    &__main {
      width: 80%;
      margin: -45px auto 0 auto;
      background-color: #fff;
      box-shadow: 0 0 12px rgba(0, 0, 0, .1);
      padding: 24px 16px;

      &__form {
        &__item {
          border: 1px solid #efefef;
          margin-bottom: 10px;
          padding: 10px;
          box-shadow: 0 0 6px rgba(177, 177, 177, .5) inset;
        }

        &__button {
          @include background-gradient(45deg);
        }
      }
    }
  }
</style>

<template>
  <view class="page">
    <view class="page__header">
      <view class="page__header__text1">登录</view>
      <view class="page__header__text2"></view>
    </view>
    <view class="page__main">
      <view class="page__main__form">
        <view class="page__main__form__item">
          <input type="number" maxlength="11" placeholder="请输入手机号" v-model="inputMobile">
        </view>
        <view class="page__main__form__item">
          <input type="password" placeholder="请输入密码" v-model="inputPassword">
        </view>
        <button :loading="isLogin" class="page__main__form__button"
                v-show="inputMobile.length === 11 && inputPassword.length > 0" @tap="doLogin">登录
        </button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      inputMobile: '',
      inputPassword: '',
      isLogin: false
    };
  },
  computed: {
  },
  onLoad() {
  },
  methods: {
    doLogin() {
      this.isLogin = true;
      uni.showLoading({ title: '登录中' });
      const params = { mobile: this.inputMobile, password: this.inputPassword };
      this.$api('passport').post('/auth/login', params)
        .then(res => {
          uni.hideLoading();
          const { data: { accessToken } } = res;
          if (accessToken) {
            this.$store.commit('SET_ACCESS_TOKEN', accessToken);
            this.requestUser(accessToken);
          }
        })
        .catch(error => {
          uni.hideLoading();
          this.$helper.print(error);
        });
      this.isLogin = false;
    },
    requestUser() {
      this.$api('app').get('/')
        .then(res => {
          const { data: { user, identityList } } = res;
          this.$store.commit('SET_USER', user);
          this.$store.commit('SET_IDENTITY_LIST', identityList);
          uni.showToast({ title: '登录成功', icon: 'none' });
          setTimeout(() => {
            this.$helper.toPage('/app/index', true);
          }, 2000);
        })
        .catch(res => {
          uni.showToast({ title: '登录失败', icon: 'none' });
        });
    }
  }
};
</script>
