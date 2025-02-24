import PropTypes from "prop-types";
import UsesCard from "../UseCard/UsesCard.jsx";

const UsesSection = ({ items }) => {
  return (
    <section className="flex flex-col p-8">
      <div className="flex flex-col gap-16">
        {items.map((group, index) => (
          <div
            key={index}
            className="flex flex-row justify-start gap-8 pl-4 border-l-2 border-gray-300 dark:border-gray-500"
          >
            <h2 className="m-0 text-lg text-gray-950 dark:text-white font-bold min-w-32">{group.groupName}</h2>
            <div className="flex flex-col gap-8">
              {group.items.map((item, itemIndex) => (
                <UsesCard key={itemIndex} title={item.title} content={item.description} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

UsesSection.defaultProps = {
  items: [],
};

UsesSection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      groupName: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default UsesSection;
