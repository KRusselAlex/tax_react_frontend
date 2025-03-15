import { useTranslation } from 'react-i18next';


const languages = [
    {code:'en', lang:'English'},
    {code:'fr',lang:"French"}
];



const LanguageSelector = () => {


 const {i18n} = useTranslation();

 const changeLanguage = (lng: string | undefined ) => {
  console.log("language", lng);
  i18n.changeLanguage(lng);
 };

  return (
    <div>
      {
        languages.map((lng)=> {
          return (
            <button
              className={
                lng.code === i18n.language
                  ? "bg-yellow-400 text-white p-2 m-2"
                  : "bg-black text-white p-2 m-2"
              }
              key={lng.code}
              onClick={() => changeLanguage(lng.code)}
            >
              {" "}
              {lng.lang}
            </button>
          );

        })
      }
      
    </div>
  )
}

export default LanguageSelector
