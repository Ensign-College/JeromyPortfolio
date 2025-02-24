"use client";

import PropTypes from "prop-types";

/* TODO:
  Fill out this component according to the README.
*/

const Footer = ({ links }) => {
  const year = new Date().getFullYear();

  return (
    <footer
      data-testid="footer"
      className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 dark:border-gray-700 py-6 px-10 border-t border-gray-300"
    >
      <ul className="flex items-center space-x-6">
        {links[0] && (
          <li data-testid="footerLink0">
            <a
              href={links[0].url}
              className="text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-gray-400 hover:underline"
            >
              {links[0].title}
            </a>
          </li>
        )}
        {links[1] && (
          <li data-testid="footerLink1">
            <a
              href={links[1].url}
              className="text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-gray-400 hover:underline"
            >
              {links[1].title}
            </a>
          </li>
        )}
        {links[2] && (
          <li data-testid="footerLink2">
            <a
              href={links[2].url}
              className="text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-gray-400 hover:underline"
            >
              {links[2].title}
            </a>
          </li>
        )}
        {links[3] && (
          <li data-testid="footerLink3">
            <a
              href={links[3].url}
              className="text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-gray-400 hover:underline"
            >
              {links[3].title}
            </a>
          </li>
        )}
      </ul>

      <p data-testid="footerContent" className="text-gray-500 dark:text-gray-300 text-sm m-0">
        © {year}
      </p>
    </footer>
  );
};

Footer.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

Footer.defaultProps = {
  links: [],
};

export default Footer;
