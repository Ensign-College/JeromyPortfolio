import Navbar from "@/components/Navbar/Navbar";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import Footer from "@/components/Footer/Footer";
import DropdownClient from "@/components/DropDown/DropdownClient";
import AboutText from "@/components/AboutText/AboutText";
import ProfileWithLinks from "@/components/ProfileWithLinks/ProfileWithLinks";

const socialMediaLinks = [
  {
    platform: "Facebook",
    url: "https://www.facebook.com/JeromyAtkin",
    logo: "/FacebookIcon.png", // Replace with your logo path
  },
  {
    platform: "GitHub",
    url: "https://github.com/AgentSpades03",
    logo: "/GithubIcon.jpg", // Replace with your logo path
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/jeromyatkin/",
    logo: "/LinkedInIcon.png", // Replace with your logo path
  },
];
const links = [
  {
    title: "Home",
    url: "/home",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Uses",
    url: "/uses",
  },
];

export const metadata = {
  title: "Portfolio - About",
  description: "The about page of my portfolio.",
};

export default function About() {
  return (
    <>
      <div className="bg-white dark:bg-gray-800">
        {/* Navbar: Hidden on small screens, visible on medium and larger screens */}
        <div className="hidden md:block bg-white dark:bg-gray-800 p-0 m-0">
          <Navbar
            options={[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/projects", label: "Projects" },
              { path: "/uses", label: "Uses" },
            ]}
          />
          <ThemeSwitcher />
        </div>

        {/* DropdownClient and Theme Switcher: Visible on small screens */}
        <div className="block md:hidden flex justify-end p-4 gap-4">
          <DropdownClient />
          <ThemeSwitcher />
        </div>

        {/* Main Content: Two-column layout */}
        <div className="flex flex-col md:flex-row min-h-screen bg-white  dark:bg-gray-800 mt-5">
          {/* Left Column: Article Cards (50% width) */}
          <div className="w-full md:w-[50%] p-6">
            <div className="space-y-6"></div>
            <AboutText></AboutText>
          </div>

          {/* Right Column: Widgets (50% width) */}
          <div className="w-full md:w-[50%] p-6">
            <div className="space-y-6"></div>
            <ProfileWithLinks
              imageUrl="/BiggerPicOfMe.jpeg"
              socialMediaLinks={socialMediaLinks}
              email="jrmatkin13@gmail.com"
            />
          </div>
        </div>

        {/* Footer */}
        <div className={"page"}>
          <header>{/* placeholder */}</header>
          <main>{/* placeholder */}</main>
          <Footer links={links} />
        </div>
      </div>
    </>
  );
}
