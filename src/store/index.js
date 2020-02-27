import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

function getFromStorage(key) {
  try {
    return uni.getStorageSync(key);
  } catch (e) {
    // error
  }
}

function setToStorage(key, value) {
  state[key] = value;
  try {
    uni.setStorageSync(key, value);
  } catch (e) {
    // error
  }
}

function removeFromStorage(key, defaultValue) {
  state[key] = defaultValue;
  try {
    uni.removeStorageSync(key);
  } catch (e) {
    // error
  }
}

const state = {
  user: getFromStorage('user') || {},
  identityList: getFromStorage('identityList') || [],
  accessToken: getFromStorage('accessToken') || '',
  hasLogin: getFromStorage('hasLogin') || false
};
const store = new Vuex.Store({
  state,
  mutations: {
    'SET_ACCESS_TOKEN'(state, accessToken) {
      setToStorage('accessToken', accessToken);
      setToStorage('hasLogin', true);
    },
    'SET_USER'(state, user) {
      setToStorage('user', user);
    },
    'SET_IDENTITY_LIST'(state, identityList) {
      setToStorage('identityList', identityList);
    },
    'LOGOUT'(state) {
      setToStorage('hasLogin', false);
      removeFromStorage('accessToken', '');
      removeFromStorage('user', {});
      removeFromStorage('identityList', []);
    }
  }
});

export default store;
