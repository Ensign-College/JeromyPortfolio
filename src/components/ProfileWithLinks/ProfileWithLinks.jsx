"use client"; // Add this if you're using Next.js with the App Router

import PropTypes from "prop-types";

const ProfileWithLinks = ({ imageUrl, socialMediaLinks, email }) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      {/* Big Picture */}
      <img
        src={imageUrl}
        alt="Profile"
        className="w-full max-w-[500px] max-h-[800px] mb-8 object-cover rounded-lg shadow-lg"
      />

      {/* Social Media Links */}
      <div className="space-y-4 mb-4">
        {socialMediaLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-4 rounded-lg transition-colors"
          >
            <img src={link.logo} alt={`${link.platform} logo`} className="w-6 h-6" />
            <span className="text-lg text-gray-700 dark:text-gray-200">Follow me on {link.platform}</span>
          </a>
        ))}
      </div>

      {/* Email Link */}
      <div className="flex items-center gap-2">
        <a href={`mailto:${email}`} className="flex items-center gap-2 p-4 rounded-lg transition-colors mt-4">
          <img
            src="/EmailIcon.png" // Replace with your email icon path
            alt="Email icon"
            className="w-6 h-6"
          />
          <span className="text-lg text-gray-700 dark:text-gray-200">{email}</span>
        </a>
      </div>
    </div>
  );
};

// PropTypes for type checking
ProfileWithLinks.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  socialMediaLinks: PropTypes.arrayOf(
    PropTypes.shape({
      platform: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
    })
  ).isRequired,
  email: PropTypes.string.isRequired,
};

export default ProfileWithLinks;
