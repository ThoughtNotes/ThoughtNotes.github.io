"use client";
import { useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button onClick={toggleTheme} className="p-2">
      {darkMode ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
}
