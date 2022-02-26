import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import MESSAGE_BUNDLE_EN from '../../asset/locales/en/translation.json';
import MESSAGE_BUNDLE_ZH from '../../asset/locales/zh/translation.json';

const resources = {
    en: {
      translation: MESSAGE_BUNDLE_EN
    },
    zh: {
      translation: MESSAGE_BUNDLE_ZH
    }
  };

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    resources,
    fallbackLng: 'en',
    debug: true,
    detection: {
        order: ['queryString', 'cookie'],
        caches: ['cookie']
    },
    interpolation: {
        escapeValue: false
    }
});

export default i18n;