"use client";

import PropTypes from "prop-types";

const SkillsWidget = ({ title, content, skills }) => {
  return (
    <section
      data-testid="skillsWidget"
      className="flex flex-col w-full max-w-[420px] gap-3 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
    >
      <h2 data-testid="skillsWidgetTitle" className="m-0 text-2xl font-bold text-gray-800 dark:text-white">
        {title}
      </h2>
      <p data-testid="skillsWidgetContent" className="text-lg text-gray-600 dark:text-gray-300">
        {content}
      </p>
      <ul className="flex flex-col gap-6 w-full">
        {skills[0] && (
          <li data-testid="skillsWidgetItem0" className="flex flex-row gap-2 items-center w-full p-0 m-0">
            <div className="flex flex-row gap-2 items-center w-full">
              <img
                data-testid="skillsWidgetItemLogo0"
                src={skills[0].icon}
                alt={`${skills[0].name} Icon`}
                className="w-12 h-12 max-w-full max-h-full"
              />
              <div className="flex flex-col gap-1 w-full">
                <h3 data-testid="skillsWidgetItemName0" className="m-0 text-lg font-bold text-gray-800 dark:text-white">
                  {skills[0].name}
                </h3>
                <div className="flex flex-row items-center h-8 bg-gray-100 dark:bg-gray-700 w-full p-0 m-0">
                  <div
                    data-testid="skillsWidgetItemProficiency0"
                    className="h-full bg-teal-500 rounded-md relative"
                    style={{ width: `${skills[0].proficiency}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </li>
        )}

        {skills[1] && (
          <li data-testid="skillsWidgetItem1" className="flex flex-row gap-2 items-center w-full p-0 m-0">
            <div className="flex flex-row gap-2 items-center w-full">
              <img
                data-testid="skillsWidgetItemLogo1"
                src={skills[1].icon}
                alt={`${skills[1].name} Icon`}
                className="w-12 h-12 max-w-full max-h-full"
              />
              <div className="flex flex-col gap-1 w-full">
                <h3 data-testid="skillsWidgetItemName1" className="m-0 text-lg font-bold text-gray-800 dark:text-white">
                  {skills[1].name}
                </h3>
                <div className="flex flex-row items-center h-8 bg-gray-100 dark:bg-gray-700 w-full p-0 m-0">
                  <div
                    data-testid="skillsWidgetItemProficiency1"
                    className="h-full bg-teal-500 rounded-md relative"
                    style={{ width: `${skills[1].proficiency}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </li>
        )}

        {skills[2] && (
          <li data-testid="skillsWidgetItem2" className="flex flex-row gap-2 items-center w-full p-0 m-0">
            <div className="flex flex-row gap-2 items-center w-full">
              <img
                data-testid="skillsWidgetItemLogo2"
                src={skills[2].icon}
                alt={`${skills[2].name} Icon`}
                className="w-12 h-12 max-w-full max-h-full"
              />
              <div className="flex flex-col gap-1 w-full">
                <h3 data-testid="skillsWidgetItemName2" className="m-0 text-lg font-bold text-gray-800 dark:text-white">
                  {skills[2].name}
                </h3>
                <div className="flex flex-row items-center h-8 bg-gray-100 dark:bg-gray-700 w-full p-0 m-0">
                  <div
                    data-testid="skillsWidgetItemProficiency2"
                    className="h-full bg-teal-500 rounded-md relative"
                    style={{ width: `${skills[2].proficiency}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </li>
        )}

        {skills[3] && (
          <li data-testid="skillsWidgetItem3" className="flex flex-row gap-2 items-center w-full p-0 m-0">
            <div className="flex flex-row gap-2 items-center w-full">
              <img
                data-testid="skillsWidgetItemLogo3"
                src={skills[3].icon}
                alt={`${skills[3].name} Icon`}
                className="w-12 h-12 max-w-full max-h-full"
              />
              <div className="flex flex-col gap-1 w-full">
                <h3 data-testid="skillsWidgetItemName3" className="m-0 text-lg font-bold text-gray-800 dark:text-white">
                  {skills[3].name}
                </h3>
                <div className="flex flex-row items-center h-8 bg-gray-100 dark:bg-gray-700 w-full p-0 m-0">
                  <div
                    data-testid="skillsWidgetItemProficiency3"
                    className="h-full bg-teal-500 rounded-md relative"
                    style={{ width: `${skills[3].proficiency}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </li>
        )}

        {skills[4] && (
          <li data-testid="skillsWidgetItem3" className="flex flex-row gap-2 items-center w-full p-0 m-0">
            <div className="flex flex-row gap-2 items-center w-full">
              <img
                data-testid="skillsWidgetItemLogo3"
                src={skills[4].icon}
                alt={`${skills[4].name} Icon`}
                className="w-12 h-12 max-w-full max-h-full"
              />
              <div className="flex flex-col gap-1 w-full">
                <h3 data-testid="skillsWidgetItemName3" className="m-0 text-lg font-bold text-gray-800 dark:text-white">
                  {skills[4].name}
                </h3>
                <div className="flex flex-row items-center h-8 bg-gray-100 dark:bg-gray-700 w-full p-0 m-0">
                  <div
                    data-testid="skillsWidgetItemProficiency3"
                    className="h-full bg-teal-500 rounded-md relative"
                    style={{ width: `${skills[4].proficiency}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </li>
        )}
      </ul>
    </section>
  );
};

SkillsWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      proficiency: PropTypes.number.isRequired,
    })
  ).isRequired,
};

SkillsWidget.defaultProps = {
  skills: [],
};

export default SkillsWidget;
