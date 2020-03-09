import React from "react";
import styles from "./App.module.css";
import LanguageSwitcher from "./components/LanguageSwitcher";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className={styles.container}>
      <LanguageSwitcher />
      <MainPage />
    </div>
  );
}

export default App;
