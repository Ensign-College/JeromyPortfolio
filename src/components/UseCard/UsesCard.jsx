import PropTypes from "prop-types";

const UsesCard = ({ title, content }) => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-[420px]">
      <h3 className="m-0 text-lg text-gray-900 dark:text-white font-bold">{title}</h3>
      <p className="m-0 text-gray-600 dark:text-gray-200">{content}</p>
    </div>
  );
};

UsesCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default UsesCard;
