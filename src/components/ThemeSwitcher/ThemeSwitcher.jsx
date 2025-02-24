"use client";

import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaSun, FaMoon } from "react-icons/fa"; // Import sun and moon icons from react-icons

const ThemeSwitcher = ({ darkClassName }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  useEffect(() => {
    applyTheme();
  }, [isDarkMode, darkClassName]);

  const toggleTheme = () => {
    setIsDarkMode((isDark) => !isDark);
  };

  const applyTheme = () => {
    if (isDarkMode) {
      document.body.classList.add(darkClassName);
    } else {
      document.body.classList.remove(darkClassName);
    }
  };

  return (
    <div className="fixed right-4 z-50 bg-white dark:bg-gray-800">
      <button
        className="p-2 rounded-full cursor-pointer text-base bg-[#8b8b8b] text-[#d4dbff] dark:bg-[#afafaf] dark:text-[#050617] hover:opacity-80 transition-opacity"
        data-testid="themeSwitcherButton"
        onClick={toggleTheme}
        aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
      </button>
    </div>
  );
};

ThemeSwitcher.propTypes = {
  darkClassName: PropTypes.string,
};

ThemeSwitcher.defaultProps = {
  darkClassName: "dark",
};

export default ThemeSwitcher;
