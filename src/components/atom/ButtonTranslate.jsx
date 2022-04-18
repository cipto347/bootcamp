import { useTranslation } from "react-i18next";
import { useState } from "react";

function BtnTranslate() {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState("en");

  const handleSwitchLanguage = async () => {
    if (currentLang === "en") {
      await i18n.changeLanguage("id");
      setCurrentLang("id");
    } else if (currentLang === "id") {
      await i18n.changeLanguage("en");
      setCurrentLang("en");
    }
  };

  return (
    <button
      type="button"
      onClick={handleSwitchLanguage}
      className="btn btn-md gap-2 btn-circle text-lg"
    >
      <span>{currentLang}</span>
    </button>
  );
}

export default BtnTranslate;
