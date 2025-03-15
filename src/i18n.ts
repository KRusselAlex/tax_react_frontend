import i18n from "i18next";
import languageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n.use(languageDetector).use(initReactI18next).init({
    debug:true,
    fallbackLng:"en",
    resources:{
        en:{

            translation:{
                greeting: "Hello"
            },

        },
        fr:{

            translation: {
                greeting: "Bonjour"
            },
        }
    }
})