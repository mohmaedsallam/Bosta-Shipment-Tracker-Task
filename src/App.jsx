import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import TrackingPage from "./pages/TrackingPage";
import bostaEnLogo from "./assets/bosta-en-logo.png";
import bostaArLogo from "./assets/bosta-ar-logo-short.png";

function App() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
    document.documentElement.lang = i18n.language;
  }, [i18n, i18n.language]);

  return (
    <Router>
      <div className={`max-w-full mx-auto px-[70px] font-cairo ${i18n.dir()} `}>
        <header className="flex items-center justify-between pt-8 ">
          <div className="flex items-center">
            <a
              href={
                i18n.language === "en"
                  ? "https://bosta.co/en-eg/home"
                  : "https://bosta.co/ar-eg/home"
              }
            >
              <img
                src={i18n.language === "en" ? bostaEnLogo : bostaArLogo}
                alt={t("logo")}
                className="w-28 h-auto bg-cover"
              />
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() =>
                changeLanguage(i18n.language === "en" ? "ar" : "en")
              }
              className="text-[#667085] hover:text-bosta-red transition-all"
            >
              {i18n.language === "en" ? "عربي" : "English"}
            </button>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<TrackingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
