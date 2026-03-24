# Language Switcher - Quick Guide

## Overview
The application now supports multiple languages with English and Spanish implemented. The system is designed to make adding new languages easy.

## Current Languages
- 🇺🇸 English (en)
- 🇪🇸 Spanish (es)

## File Structure
```
src/lib/i18n/
├── language-context.tsx    # React context for language state
├── use-translation.ts      # Hook to access translations
└── translations/
    ├── en.ts              # English translations
    ├── es.ts              # Spanish translations
    └── index.ts           # Export all translations
```

## How to Add a New Language

### Step 1: Create Translation File
Create a new file in `src/lib/i18n/translations/` (e.g., `fr.ts` for French):

```typescript
import type { TranslationKeys } from "./en";

export const fr: TranslationKeys = {
  roleSelection: {
    title: "Évaluation d'achèvement du coaching",
    // ... copy structure from en.ts and translate all strings
  },
  // ... rest of translations
};
```

### Step 2: Update Language Type
In `src/lib/i18n/language-context.tsx`, update the Language type:

```typescript
export type Language = "en" | "es" | "fr";  // Add your language code
```

### Step 3: Add to Translations Index
In `src/lib/i18n/translations/index.ts`, import and add your language:

```typescript
import { fr } from "./fr";

export const translations: Record<Language, typeof en> = {
  en,
  es,
  fr,  // Add your language
};
```

### Step 4: Update Language Switcher
In `src/components/ui/language-switcher.tsx`, add your language to the array:

```typescript
const LANGUAGES = [
  { code: "en" as Language, label: "English", flag: "🇺🇸" },
  { code: "es" as Language, label: "Español", flag: "🇪🇸" },
  { code: "fr" as Language, label: "Français", flag: "🇫🇷" },  // Add here
];
```

The dropdown will automatically update to show your new language.

## Using Translations in Components

### Basic Usage
```typescript
import { useTranslation } from "@/lib/i18n/use-translation";

function MyComponent() {
  const t = useTranslation();
  return <h1>{t.roleSelection.title}</h1>;
}
```

### With Placeholders
```typescript
import { useTranslation } from "@/lib/i18n/use-translation";
import { interpolate } from "@/lib/i18n/translations";

function MyComponent({ name }: { name: string }) {
  const t = useTranslation();
  return <p>{interpolate(t.results.thankYou, { name })}</p>;
}
```

## Features

✅ **Persistent Language Selection** - User's language choice is saved to localStorage
✅ **No Hydration Issues** - Properly handles SSR/CSR differences
✅ **Type-Safe** - TypeScript ensures all translations have the same structure
✅ **Easy to Extend** - Just add a new translation file and update the language list

## Components with Translation Support

- ✅ Role Selection Screen
- ✅ Assessment Shell  
- ✅ Module Slides
- ✅ Results Screen

## Language Switcher Location

The language switcher appears as a dropdown in the top-right corner on:
- Role selection page
- During assessment
- Results screen

### Responsive Behavior
- **Desktop**: Shows flag + language name (e.g., "🇺🇸 English")
- **Mobile**: Shows only flag and icon for compact view
- **Dropdown**: Animated dropdown menu with all available languages

## Notes

- The English file (`en.ts`) serves as the source of truth for translation keys
- All other language files must implement the `TranslationKeys` type
- Use the `interpolate()` helper function for dynamic values in translation strings
- Format: `{variableName}` in translation strings gets replaced with actual values
