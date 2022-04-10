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
      className="btn btn-sm gap-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        />
      </svg>
      <span>{currentLang}</span>
    </button>
  );
}

export default BtnTranslate;
