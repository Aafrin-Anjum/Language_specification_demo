// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import Backend from 'i18next-xhr-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';

// const fallbackLng = ['en'];
// const availableLanguages = ['en', 'ar', 'fr'];

// i18n
//   .use(Backend) // load translations using http (default                                               public/assets/locals/en/translations)
//   .use(LanguageDetector) // detect user language
//   .use(initReactI18next) // pass the i18n instance to react-i18next.
//   .init({
//     fallbackLng, // fallback language is english.

//     detection: {
//       checkWhitelist: true, // options for language detection
//     },

//     debug: false,

//     whitelist: availableLanguages,

//     interpolation: {
//       escapeValue: false, // no need for react. it escapes by default
//     },
//   });

// export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./assets/translations/en.json";
import translationAR from "./assets/translations/ar.json";
import translationFR from "./assets/translations/de.json";

const fallbackLng = ["en"];
const availableLanguages = ["en", "ar", "fr"];

const resources = {
  en: {
    translation: translationEN
  },
  ar: {
    translation: translationAR
  },
  fr: {
    translation: translationFR
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng,

    detection: {
      checkWhitelist: true
    },

    debug: false,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;


// import i18n from "i18next";
// import Backend from "i18next-xhr-backend";
// import { initReactI18next } from "react-i18next";

// i18n
// .use(Backend)
// .use(initReactI18next)
// .init({
// lng: "en", //default language
// fallbackLng: "en", //when specified language translations not present 
// //then fallbacklang translations loaded.
// debug: true,

// backend: {
// /* translation file path */
// loadPath: "https://cdn.mindbowser.com/assets/i18n/{{ns}}/{{lng}}.json",
// },

// /* can have multiple namespace, in case you want to divide a huge translation into smaller pieces and load them on demand */

// ns: ["translations"],
// defaultNS: "translations",
// keySeparator: false,
// interpolation: {
// escapeValue: false,
// formatSeparator: ",",
// },
// react: {
// wait: true,
// },
// });

// export default i18n;