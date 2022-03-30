import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    //  Set default language
    lng: "en",
    //  language to use if translations in user language are not available
    fallbackLng: "en",
    debug: false,
    //  string or array of namespaces to load
    ns: "translation",
    defaultNS: "translation",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
