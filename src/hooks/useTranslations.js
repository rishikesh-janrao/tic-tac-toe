import SERVICES from "../constants/server";

const response = await fetch(SERVICES.TRANSLATIONS);
const Translations = await response.json();

const useTranslations = () => {
  const t = (param) =>
    Object.keys(Translations).includes(param) ? Translations[param] : "";
  return {
    t,
  };
};

export default useTranslations;
