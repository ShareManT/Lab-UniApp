const uniAsyncProxy = new Proxy({}, {
  get(target, name) {
    return (obj) => new Promise((resolve, reject) => {
      uni[name]({
        ...obj,
        success: ret => {
          resolve(ret);
        },
        fail: err => {
          reject(err);
        }
      });
    });
  }
});

const UniAsync = {};
UniAsync.install = function(Vue, options) {
  Vue.prototype.$uniAync = uniAsyncProxy;
};

export default UniAsync;
