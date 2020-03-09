import React from "react";

export const LanguageContext = React.createContext(null);

class LanguageContextProvider extends React.Component {
state={
    currentLanguage: "pl"
}

changeLanguage=(lang)=>{
    this.setState({
        currentLanguage: lang
    })
}

  render() {
    const context = {
      availableLanguages: ["pl", "en"],
      currentLanguage: this.state.currentLanguage,
      changeLanguage: this.changeLanguage
    };
    return (
      <LanguageContext.Provider value={context}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

export default LanguageContextProvider;
