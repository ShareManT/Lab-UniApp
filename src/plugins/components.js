import AppBox from '../components/app-box';
import Nameplate from '../components/nameplate';

const ComponentRegisterPlugin = {};
ComponentRegisterPlugin.install = function(Vue, options) {
  Vue.component('app-box', AppBox);
  Vue.component('nameplate', Nameplate);
};

export default ComponentRegisterPlugin;
