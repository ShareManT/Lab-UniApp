'use strict';

import Request from './request';
import Config from '../../config';

function getBaseUrl(service) {
  return `${Config.agents[service].protocol}://${Config.agents[service].host}/api`;
}

function onErrorResponse(response) {
  if (response.data.statusCode !== 200) {
    uni.showToast({
      title: response.data.data || '未知错误',
      duration: 3000,
      icon: 'none',
      position: 'bottom'
    });
  }
}

function onSuccessResponse(response) {
  if (response.statusCode === 200 && response.data.error === 1) {
    uni.showToast({
      title: response.data.data || '未知错误',
      duration: 3000,
      icon: 'none',
      position: 'bottom'
    });
  }
}

const app = new Request();
app.setConfig((config) => {
  config.baseUrl = getBaseUrl('app');
  config.header = {
    ...config.header
  };
  return config;
});
app.validateStatus = (statusCode) => {
  return statusCode === 200;
};
app.interceptor.request((config, cancel) => {
  config.header = {
    ...config.header,
  };
  return config;
});
app.interceptor.response((response) => {
  onSuccessResponse(response);
  return response.data;
}, (response) => {
  onErrorResponse(response);
  return response.data;
});

const passport = new Request();
passport.setConfig((config) => {
  config.baseUrl = getBaseUrl('passport');
  config.header = {
    ...config.header
  };
  return config;
});
passport.validateStatus = (statusCode) => {
  return statusCode === 200;
};
passport.interceptor.request((config, cancel) => {
  config.header = {
    ...config.header
  };
  return config;
});
passport.interceptor.response((response) => {
  onSuccessResponse(response);
  return response.data;
}, (response) => {
  onErrorResponse(response);
  return response.data;
});

const ApiService = {
  app,
  passport
};

export default ApiService;
