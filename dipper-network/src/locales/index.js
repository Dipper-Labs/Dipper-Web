import Vue from 'vue';
import VueI18n from 'vue-i18n';

import en from './en';
import zh from './zh';

Vue.use(VueI18n);

const messages = {
  'en-US': en,
  'zh-CN': zh
};

let locale = localStorage.getItem("locale") || 'zh-CN'
export default new VueI18n({
  locale: locale,
  fallbackLocale: 'en-US',
  messages
});
