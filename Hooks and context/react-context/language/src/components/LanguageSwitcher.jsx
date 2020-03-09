import React from "react";
import styles from "./LanguageSwitcher.module.css";
import classNames from "classnames";
import { LanguageContext} from "../context/LangouageContext"
import { useContext } from "react";


const LanguageSwitcher=()=>{
  const context = useContext(LanguageContext)

  const  handleLanguageChange = lang => () => {
    context.changeLanguage(lang)
  };

  return context.availableLanguages.map((lang, index) => {
          const classes = classNames({
            [styles.button]: true,
            [styles.selectedButton]: lang === context.currentLanguage
          });
          return (
            <button
              className={classes}
              onClick={handleLanguageChange(lang)}
              key={index}
            >
              {lang}
            </button>
          );
        });
}
// class LanguageSwitcher extends React.Component {
//   handleLanguageChange = lang => () => {
//     this.props.changeLanguage(lang)
//   };

//   render() {
//     // TODO Move to context
//     console.log(this.props)
//     const {availableLanguages, currentLanguage} = this.props

//     return availableLanguages.map((lang, index) => {
//       const classes = classNames({
//         [styles.button]: true,
//         [styles.selectedButton]: lang === currentLanguage
//       });
//       return (
//         <button
//           className={classes}
//           onClick={this.handleLanguageChange(lang)}
//           key={index}
//         >
//           {lang}
//         </button>
//       );
//     });
//   }
// }

export default LanguageSwitcher
