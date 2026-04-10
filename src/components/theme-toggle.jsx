"use client";

import ThemeToggleBtn from "./theme-toggle-btn";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle({ ...props }) {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <ThemeToggleBtn toggled={!isDarkMode} onToggle={toggleTheme} {...props} />
  )
}