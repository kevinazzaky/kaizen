"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Language = "id" | "en";
export type LocalizedText = Record<Language, string>;

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

const languageStorageKey = "kaizen-language";

function isLanguage(value: string | null): value is Language {
  return value === "id" || value === "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "id";
    }

    const savedLanguage = window.localStorage.getItem(languageStorageKey);
    return isLanguage(savedLanguage) ? savedLanguage : "id";
  });

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(languageStorageKey, language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: setLanguageState,
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}

export function t(text: string | LocalizedText, language: Language) {
  return typeof text === "string" ? text : text[language];
}
