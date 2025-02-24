"use client"; // Ensure this is a Client Component

import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import PropTypes from "prop-types";

function Navbar({ options }) {
  return (
    <nav
      data-testid="nav"
      className="navbar fixed left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg px-6 dark:bg-gray-700 dark:border-gray-400"
    >
      <ul data-testid="ul" className="flex space-x-6 dark:text-white">
        {options.map((option, index) => (
          <li key={index} data-testid={`li${index}`}>
            <NavbarLink to={option.path} testId={`a${index}`}>
              {option.label}
            </NavbarLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

function NavbarLink({ children, to, testId }) {
  const pathname = usePathname(); // Get the current path
  const isActive = pathname === to; // Check if the current path matches the link's path

  return (
    <Link
      href={to}
      data-testid={testId}
      className={`text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-300 hover:underline font-medium ${
        isActive ? "text-blue-500 underline font-bold bg-green-500" : ""
      }`}
    >
      {children}
    </Link>
  );
}

NavbarLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  testId: PropTypes.string.isRequired,
};

export default Navbar;
