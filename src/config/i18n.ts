import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

export interface LinkType {
  id: string;
  name: string;
}

const ua = {
  translation: {
    header: {
      location: "Софіївська Борщагівка, ЖК «Софія», вул. Миру 30/18",
      links: [
        { id: "services", name: "Послуги" },
        { id: "about_clinic", name: "Про клініку" },
        { id: "doctors", name: "Лікарі" },
        { id: "prices", name: "Ціни" },
        { id: "contact", name: "Контакти" },
      ] as LinkType[],
    },
  },
};

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
      ua,
    },
  });

export default i18n;
