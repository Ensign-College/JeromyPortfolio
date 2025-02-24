"use client";

import PropTypes from "prop-types";

const WorkWidget = ({ title, content, experiences }) => {
  return (
    <section
      data-testid="workWidget"
      className="flex flex-col w-full max-w-md gap-3 dark:bg-gray-800 rounded-lg shadow-md"
    >
      <h2 data-testid="workWidgetTitle" className="text-xl font-bold text-gray-900 dark:text-white mt-2 text-center">
        {title}
      </h2>
      <p data-testid="workWidgetContent" className="text-gray-600 text-base dark:text-gray-300">
        {content}
      </p>

      <ul className="flex flex-col gap-6">
        {/* Experience 1 */}
        <li data-testid="workWidgetItem0">
          <div className="flex items-center gap-3">
            <img
              data-testid="workWidgetItemLogo0"
              src={experiences[0].logo}
              alt={`${experiences[0].organization} logo`}
              className="w-16 h-10 rounded-sm max-w-full max-h-full"
            />
            <div className="flex flex-col flex-grow gap-1">
              <h3 data-testid="workWidgetItemTitle0" className="text-lg font-bold text-gray-900 dark:text-white">
                {experiences[0].organization}
              </h3>
              <div className="flex justify-between items-center text-sm text-gray-500 uppercase dark:text-gray-300">
                <p data-testid="workWidgetItemContent0" className="m-0 p-0">
                  {experiences[0].jobTitle}
                </p>
                <span data-testid="workWidgetItemDates0" className="text-gray-500 text-xs dark:text-gray-300">
                  {experiences[0].startYear} - {experiences[0].endYear ? experiences[0].endYear : "Present"}
                </span>
              </div>
            </div>
          </div>
        </li>

        {/* Experience 2 */}
        <li data-testid="workWidgetItem1">
          <div className="flex items-center gap-3">
            <img
              data-testid="workWidgetItemLogo1"
              src={experiences[1].logo}
              alt={`${experiences[1].organization} logo`}
              className="w-16 h-16 rounded-full max-w-full max-h-full"
            />
            <div className="flex flex-col flex-grow gap-1">
              <h3 data-testid="workWidgetItemTitle1" className="text-lg font-bold text-gray-900 dark:text-white">
                {experiences[1].organization}
              </h3>
              <div className="flex justify-between items-center text-sm text-gray-500 uppercase dark:text-gray-300">
                <p data-testid="workWidgetItemContent1" className="m-0 p-0">
                  {experiences[1].jobTitle}
                </p>
                <span data-testid="workWidgetItemDates1" className="text-gray-500 text-xs dark:text-gray-300">
                  {experiences[1].startYear} - {experiences[1].endYear ? experiences[1].endYear : "Present"}
                </span>
              </div>
            </div>
          </div>
        </li>

        {/* Experience 3 */}
        <li data-testid="workWidgetItem2">
          <div className="flex items-center gap-3">
            <img
              data-testid="workWidgetItemLogo2"
              src={experiences[2].logo}
              alt={`${experiences[2].organization} logo`}
              className="w-16 h-16 rounded-full max-w-full max-h-full"
            />
            <div className="flex flex-col flex-grow gap-1">
              <h3 data-testid="workWidgetItemTitle2" className="text-lg font-bold text-gray-900 dark:text-white">
                {experiences[2].organization}
              </h3>
              <div className="flex justify-between items-center text-sm text-gray-500 uppercase dark:text-gray-300">
                <p data-testid="workWidgetItemContent2" className="m-0 p-0">
                  {experiences[2].jobTitle}
                </p>
                <span data-testid="workWidgetItemDates2" className="text-gray-500 text-xs dark:text-gray-300">
                  {experiences[2].startYear} - {experiences[2].endYear ? experiences[2].endYear : "Present"}
                </span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

WorkWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string.isRequired,
      organization: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
      startYear: PropTypes.number.isRequired,
      endYear: PropTypes.number,
    })
  ),
};

WorkWidget.defaultProps = {
  experiences: [],
};

export default WorkWidget;
