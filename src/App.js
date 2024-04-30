import "./App.css";
import useTranslations from "./hooks/useTranslations";

function App() {
  const { t } = useTranslations();
  return (
    <div className="container">
      <h2>{t("game_title")}</h2>
    </div>
  );
}

export default App;
