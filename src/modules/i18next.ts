import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import enTrans from '../assets/locales/en/translation.json'
import ruTrans from '../assets/locales/ru/translation.json'

// eslint-disable-next-line import/no-named-as-default-member
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      ru: {
        translation: ruTrans,
      },
      en: {
        translation: enTrans,
      },
    },
    fallbackLng: 'ru',

    interpolation: {
      escapeValue: false,
    },
  })

export { i18n }
export default i18n
