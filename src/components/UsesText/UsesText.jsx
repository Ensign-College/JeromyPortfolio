"use client"; // Add this if you're using Next.js with the App Router

const UsesText = () => {
  return (
    <div className="w-full mt--20">
      {/* Big Heading */}
      <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-6 text-left">
        {"Software I like, Tools I use, and why they're awesome."}
      </h1>

      {/* Paragraphs of Text */}
      <div className="space-y-4">
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-left">
          {"Not even the best software engineers get very far without the right tools on their belt to get the job done. Everyone has their own tool belt, but here are the tools " +
            "that I use often and am profecient with. "}
        </p>
      </div>
    </div>
  );
};

// PropTypes for type checking

export default UsesText;
