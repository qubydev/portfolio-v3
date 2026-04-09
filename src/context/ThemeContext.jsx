"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
    isDarkMode: false,
    toggleTheme: () => { },
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");

        let isDark;

        if (storedTheme) {
            isDark = storedTheme === "dark";
        } else {
            isDark =
                window.matchMedia?.("(prefers-color-scheme: dark)").matches ??
                true;
        }

        setIsDarkMode(isDark);
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode, mounted]);

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };

    if (!mounted) return null;

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};