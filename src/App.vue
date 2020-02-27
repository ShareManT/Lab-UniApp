<style lang="scss">
    html {

        body {
            background-color: $bg-color-grey;
        }
    }
</style>

<script>
import { mapState } from 'vuex';

export default {
  mpType: 'app',
  computed: {
    ...mapState(['hasLogin'])
  },
  onLaunch() {
    console.log('App Launch');
    this.checkRuntime();
    this.checkLoginStatus();
  },
  onShow() {
    console.log('App Show');
  },
  onHide() {
    console.log('App Hide');
  },
  methods: {
    checkRuntime() {
      switch (uni.getSystemInfoSync().platform) {
        case 'android':
          console.log('Android Runtime');
          break;
        case 'ios':
          console.log('iOS Runtime');
          break;
        default:
          console.log('DevTool Runtime');
          break;
      }
    },
    checkLoginStatus() {
      if (!this.hasLogin) {
        this.$helper.toPage('/user/auth');
      } else {
        this.$helper.toPage('/app/index');
      }
    }
  }
};
</script>
