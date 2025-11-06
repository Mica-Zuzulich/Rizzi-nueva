import React from "react";
import { useTranslation } from "react-i18next";
import styles from './LanguageButton.module.css';

function LanguageButton() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
  };

  return (
    <button onClick={toggleLanguage}>
      🌐 {i18n.language === "es" ? "English" : "Español"}
    </button>
  );
}

export default LanguageButton;
