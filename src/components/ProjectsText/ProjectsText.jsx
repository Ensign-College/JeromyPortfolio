"use client"; // Add this if you're using Next.js with the App Router

const ProjectsText = () => {
  return (
    <div className="w-full mt--20">
      {/* Big Heading */}
      <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-6 text-left">
        {"Projects I've made trying to reach for the stars."}
      </h1>

      {/* Paragraphs of Text */}
      <div className="space-y-4">
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-left">
          {
            "Here are some of the projects I've worked on so far. Mostly video games, as that's where my passion is, but all these projects I've loved working on!"
          }
        </p>
      </div>
    </div>
  );
};

// PropTypes for type checking

export default ProjectsText;
