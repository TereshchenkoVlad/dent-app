import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "ua",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      ua: {
        translation: {
          location: "Софіївська Борщагівка, ЖК «Софія», вул. Миру 30/18",
          navigation: {
            services: "Послуги",
            about_clinic: "Про клініку",
            doctors: "Лікарі",
            prices: "Ціни",
            contacts: "Контакти",
          },
        },
      },
      //   en: {
      //     translation: {
      //       location:
      //         "Sofiyivska Borshchahivka, Residential Complex «Sofia», street Peace 30/18",
      //       navigation: {
      //         services: "Services",
      //         about_clinic: "About clinic",
      //         doctors: "Doctors",
      //         prices: "Prices",
      //         contacts: "Contacts",
      //       },
      //     },
      //   },
    },
  });

export default i18n;
