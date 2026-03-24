import { useLanguage } from "./language-context";
import { translations } from "./translations/index";

export function useTranslation() {
  const { language } = useLanguage();
  return translations[language];
}
