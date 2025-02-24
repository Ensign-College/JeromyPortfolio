"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import PropTypes from "prop-types";

function NavbarLink({ children, to, testId }) {
  const pathname = usePathname(); // Get the current path
  const isActive = pathname === to; // Check if the current path matches the link's path

  return (
    <Link
      href={to}
      data-testid={testId}
      className={`text-gray-700 dark:text-white hover:text-blue-500 hover:underline font-medium ${
        isActive ? "text-blue-500 underline font-bold" : ""
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

export default NavbarLink;
