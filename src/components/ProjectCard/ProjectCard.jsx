import PropTypes from "prop-types";

const ProjectCard = ({ logo, name, content, link }) => {
  return (
    <div
      data-testid="projectCard"
      className="flex flex-col p-6 border border-gray-200 rounded-lg w-full max-w-sm space-y-4 shadow-lg dark:border-gray-600"
    >
      <div className="flex items-center space-x-4">
        <img
          data-testid="projectCardLogo"
          src={logo}
          alt="Company name Logo"
          className="w-16 h-16 rounded-full p-1 border-2 border-gray-300 dark: border-gray-600"
        />
        <h2 data-testid="projectCardName" className="text-2xl font-bold text-gray-900 dark:text-white">
          {name}
        </h2>
      </div>
      <p data-testid="projectCardContent" className="text-gray-600 text-base line-clamp-3 dark:text-gray-200">
        {content}
      </p>
      <a
        data-testid="projectCardLink"
        href={link}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center text-gray-700 dark:text-white text-base hover:text-black hover:underline dark:hover:text-blue-700"
      >
        <img src="/link.svg" alt="" className="w-4 h-4 mr-2" /> View Project
      </a>
    </div>
  );
};

ProjectCard.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
};

ProjectCard.defaultProps = {
  link: "#",
};

export default ProjectCard;
