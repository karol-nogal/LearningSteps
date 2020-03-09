import React from "react";
import {  LanguageContext } from "../context/LangouageContext";
import { useContext } from "react";

const MainPage = () => {

  const context = useContext(LanguageContext);

  const getLocalizedText = () => {
    switch (context.currentLanguage) {
      case "pl": {
        return "Cześć!";
      }
      case "en": {
        return "Hello!";
      }
      default: {
        return "Hej!";
      }
    }
  };
  return <div>{getLocalizedText()}</div>;
};

// class MainPage extends React.Component {
//   getLocalizedText = () => {

//     const {currentLanguage} = this.props

//     switch (currentLanguage) {
//       case "pl": {
//         return "Cześć!";
//       }
//       case "en": {
//         return "Hello!";
//       }
//       default: {
//         return "Hej!";
//       }
//     }
//   };

//   render() {
//     console.error(this.props)
//     return <div>{this.getLocalizedText()}</div>;
//   }
// }

// export default withLanguage(MainPage);

export default MainPage
