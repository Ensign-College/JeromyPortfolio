"use client";

import { useState } from "react";
import PropTypes from "prop-types";

const Dropdown = ({ onHome, onAbout, onProject, onUses }) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <div data-testid="dropdown" className="relative mr-12">
      {" "}
      {/* Added mr-12 for right margin */}
      <button
        data-testid="menuButton"
        className="bg-white text-black dark:bg-gray-600 dark:text-white py-2 px-4 text-base cursor-pointer flex items-center gap-2 rounded border border-gray-300 dark:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-400 transition-colors duration-200"
        onClick={toggleDropdown}
      >
        Menu
        <span className={`transform transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}>▼</span>
      </button>
      {isOpen && (
        <div className="absolute bg-white dark:bg-gray-600 min-w-40 z-10 overflow-hidden shadow-lg mt-1 rounded border border-gray-200 dark:border-gray-500">
          <button
            data-testid="HomeButton"
            className="text-black dark:text-white py-3 pl-2 pr-4 block w-full text-left cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-400"
            onClick={onHome}
          >
            Home
          </button>
          <button
            data-testid="AboutButton"
            className="text-black dark:text-white py-3 pl-2 pr-4 block w-full text-left cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-400"
            onClick={onAbout}
          >
            About
          </button>
          <button
            data-testid="projectsButton"
            className="text-black dark:text-white py-3 pl-2 pr-4 block w-full text-left cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-400"
            onClick={onProject}
          >
            Projects
          </button>
          <button
            data-testid="usesButton"
            className="text-black dark:text-white py-3 pl-2 pr-4 block w-full text-left cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-400"
            onClick={onUses}
          >
            Uses
          </button>
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  onHome: PropTypes.func,
  onAbout: PropTypes.func,
  onProject: PropTypes.func,
  onUses: PropTypes.func,
};

Dropdown.defaultProps = {
  onHome: () => {},
  onAbout: () => {},
  onProject: () => {},
  onUses: () => {},
};

export default Dropdown;
