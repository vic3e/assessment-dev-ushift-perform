import { en } from "./en";
import { es } from "./es";
import type { Language } from "../language-context";

export const translations: Record<Language, typeof en> = {
  en,
  es,
};

// Helper function to replace placeholders in translation strings
export function interpolate(template: string, values: Record<string, string>): string {
  return template.replace(/{(\w+)}/g, (_, key) => values[key] || `{${key}}`);
}
