<style lang="scss" scoped>
  .app-box {
    display: flex;
    flex-flow: column wrap;
    align-items: center;

    &__item {
      width: 100%;
      cursor: pointer;
      box-sizing: border-box;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      padding: 16px;
      border: 1px solid #eee;
      transition: all .2s ease-in-out;
      overflow: hidden;
      margin-right: -1px;
      margin-bottom: -1px;
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0,0,0,.1);

      &__image {
        img {
          width: 46px;
          height: 46px;
        }
      }

      &__info {
        color: #666666;
        letter-spacing: 1px;

        &__name {

        }

        &__detail {
          display: none;
          margin-top: 4px;
          transition: all .2s ease-in-out;

          &__tag {
            font-size: 14px;
            padding: 2px 6px;
            border-radius: 3px;
            border: 1px solid #eee;

            &:not(:first-child) {
              margin-left: 4px;
            }
          }
        }

      }

      &:hover {
        box-shadow: 0 0 12px rgba(0, 0, 0, .1) inset;

        &:hover {
          .app-box__item__info__detail {
            display: block;
          }
        }
      }

    }
  }
</style>

<template>
  <view class="app-box">
    <view v-for="(item,key) in apps" :key="key" class="app-box__item" @click="$helper.toPage(item.path)">
      <view class="app-box__item__image">
      </view>
      <view class="app-box__item__info">
        <view class="app-box__item__info__name">{{item.name}}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'app-box',
  props: {
  },
  data() {
    return {
      apps: [
        { name: '充值', path: '/app/recharge/index' }
      ]
    };
  },
  computed: {
  },
  mounted() {
  },
  methods: {}
};
</script>
