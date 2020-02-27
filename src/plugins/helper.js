function toPage(path, isTabPage = false, options = {}) {
  const url = '/pages' + path;
  if (isTabPage) {
    uni.switchTab({
      url,
      ...options
    });
  } else {
    uni.navigateTo({
      url,
      ...options
    });
  }
}

function print(context) {
  console.log('');
  console.log('=========================');
  console.log();
  console.log(context);
  console.log('=========================');
  console.log('');
}

const Helper = {};
Helper.install = function(Vue, options) {
  Vue.prototype.$helper = { toPage, print };
};

export default Helper;
