"use client";

import PropTypes from "prop-types";

const ArticleCard = ({ date, title, content, link }) => {
  return (
    <article
      data-testid="articleCard"
      className="flex flex-col w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
    >
      <div className="article-card-header">
        <time data-testid="articleCardDate" className="text-sm uppercase text-gray-400 dark:text-gray-300 pl-2">
          {date}
        </time>
        <h2 data-testid="articleCardTitle" className="text-2xl capitalize my-4 font-bold dark:text-white">
          {title}
        </h2>
      </div>
      <p data-testid="articleCardContent" className="text-base text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
        {content}
      </p>
      <a
        data-testid="articleCardLink"
        href={link}
        className="text-blue-600 dark:text-blue-400 font-bold hover:underline"
      >
        Read article
      </a>
    </article>
  );
};

ArticleCard.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
};

ArticleCard.defaultProps = {
  link: "#",
};

export default ArticleCard;
