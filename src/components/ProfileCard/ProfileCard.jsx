"use client";

const ProfileCard = () => {
  return (
    <div className="flex">
      {/* Profile Card (60% width) */}

      <div className="flex flex-col items-start text-left p-4 bg-white dark:bg-gray-800 rounded-lg">
        {/* Profile Image */}
        <div className="flex items-left gap-4">
          <img src="/HeadShotForPresentations.jpg" alt="Jeromy Picture" className="w-20 h-20 rounded-full mb-10" />
        </div>

        {/* Title */}
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mt-2 text-left">
          Changing the world, one project at a time.
        </h1>

        {/* Short Bio */}
        <p className="text-gray-600 dark:text-gray-300 text-lg text-left mt-2">
          I’m a curious creator with a passion for learning, building, and exploring new ideas. Whether it’s coding up a
          fresh project, designing a video game, or diving into a new skill, I thrive on turning ideas into reality. I
          love the challenge of solving problems and the joy of seeing something I’ve made come to life. For me, every
          project is a chance to grow, innovate, and make a little impact—one line of code or pixel at a time.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src="/GithubIcon.jpg" alt="GitHub" className="w-6 h-6" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/FacebookIcon.png" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src="/LinkedInIcon.png" alt="LinkedIn" className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Rest of the content (40% width) */}
      <div className="w-[40%]">{/* Add other elements here */}</div>
    </div>
  );
};

export default ProfileCard;
