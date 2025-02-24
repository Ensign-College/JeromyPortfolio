"use client"; // Add this if you're using Next.js with the App Router

const AboutText = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      {/* Big Heading */}
      <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
        {"I'm Jeromy, I'm new to the programming world, but it will never be the same with me around."}
      </h1>

      {/* Paragraphs of Text */}
      <div className="space-y-4">
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {"Hello! My name's Jeromy, and thank for visiting my page! I grew up in a small town in eastern Utah called Roosevelt, and I currently live in South Jordan Utah" +
            ". I've been married to my sweetheart Leslee for about nine years now, and during that time I realized I was ready for a big change. I had been working in a managerial " +
            "position for a big janitorial company for about five years, when I decided to finally get into school and pursue my dreams. I was very overworked at the time, but " +
            "I don't regret my time there, as it taught me many skills with management and how to work with people. But one can only overwork themselves for so long, so I took the " +
            "long overdue plunge into school."}
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {"I originally started school going for a business degree, which I eventually finished at Ensign College. However, during that time I was required to take some elective " +
            "classes, and I happened to choose a beginning coding class. That class, while not being all that special of a class, awakened in me a passion for software engineering " +
            "I didn't know I had, but one that had always been there. I grew up being my family's 'tech support', and playing video games, so my love of the computer has been in " +
            "my life for well, my entire life. Since then I have enrolled for a second bachelors degree in software engineering, which I plan to finish by the end of 2025."}
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {"With my dual degrees I plan to make a big splash in the software engineering world. I want to some day open up my own development studio, where I intend to make " +
            "various apps, video games, or whatever else me and my team can come up with. I think there's a lot of problems in the culture of many big tech companies, and I " +
            "intend to show them how to do it right. I'm pretty well versed now in Java and C#, as well as with web development. There's of course much more to learn than that, " +
            "but with those tools I believe that I can go far in this world. I'm currently looking for internships to build up my resume, finish my degree, and build some capital " +
            "to get my future tech business off the ground."}
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {"With all that in mind, I'm excited for what the future will bring. I'm sure life will change and things will get in the way, but I've come this far, and I have no " +
            "intention of stopping now. I'm the kind of person that likes to likes to try new things, and I'm ready for the challenges that lay ahead."}
        </p>
      </div>
    </div>
  );
};

// PropTypes for type checking

export default AboutText;
