"use client";
import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

export type Lang = "en" | "hi";

interface LanguageContextType {
    lang: Lang;
    toggleLang: () => void;
    setLang: (lang: Lang) => void;
    t: (en: string, hi: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLangState] = useState<Lang>("hi");

    useEffect(() => {
        try {
            const saved = localStorage.getItem("comptia-lang");
            if (saved === "en" || saved === "hi") setLangState(saved);
        } catch {}
    }, []);

    useEffect(() => {
        try { localStorage.setItem("comptia-lang", lang); } catch {}
    }, [lang]);

    const toggleLang = useCallback(() => setLangState(p => p === "en" ? "hi" : "en"), []);
    const setLang = useCallback((l: Lang) => setLangState(l), []);
    const t = useCallback((en: string, hi: string) => lang === "en" ? en : hi, [lang]);

    return (
        <LanguageContext.Provider value={{ lang, toggleLang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLanguage must be inside LanguageProvider");
    return ctx;
}

// Helper type for bilingual text
export type BT = { en: string; hi: string };
export type BA = { en: string[]; hi: string[] };

// Helper to pick language from bilingual object
export function pick<T>(obj: { en: T; hi: T }, lang: Lang): T {
    return obj[lang];
}
