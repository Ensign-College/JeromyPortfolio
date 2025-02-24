import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import DropdownClient from "@/components/DropDown/DropdownClient";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import ProjectsText from "@/components/ProjectsText/ProjectsText";

export const metadata = {
  title: "Portfolio - Projects",
  description: "The projects page of my portfolio.",
};

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

export default function Projects() {
  return (
    <>
      <div className="bg-white dark:bg-gray-800">
        {/* Navbar: Hidden on small screens, visible on medium and larger screens */}
        <div className="hidden md:block bg-white dark:bg-gray-800 p-0 m-0 fixed top-0 w-full z-50">
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

        {/* Wrapper for ProjectsText with background color */}
        <div className="bg-white dark:bg-gray-800 pt-24">
          {" "}
          {/* Add padding-top here */}
          {/* Profile Card: Above the three columns, 70% width */}
          <div className="w-[70%] left-0 ml-10">
            <ProjectsText />
          </div>
        </div>

        {/* Main Content: Three-column layout */}
        <div className="flex flex-col md:flex-row min-h-screen bg-white dark:bg-gray-800 p-6">
          {/* Left Column: Project Card (33% width) */}
          <div className="w-full md:w-[33%] p-4">
            <ProjectCard
              name={"Ensign College - Azul"}
              logo={"/Ensign_CollegeLogo.png"}
              content={
                "This project was done in Unity for a project class that I was in charge of. It's a digital implementation of the board game Azul. It's fully playable, and even has an ai bot that you can play against!"
              }
              link={"https://github.com/AgentSpades03/Azul/"}
            />
          </div>

          {/* Middle Column: Project Card (33% width) */}
          <div className="w-full md:w-[33%] p-4">
            <ProjectCard
              name={"Ensign College - Codebreakers"}
              logo={"/Ensign_CollegeLogo.png"}
              content={
                "This was a more traditional RPG that I got to work on here at the college, for this project I was in charge of building the enemies for the game, and coding their behaviors and actions."
              }
              link={"https://github.com/jotacalderon94/Codebreakers-The-Hidden-Quest"}
            />
          </div>

          {/* Right Column: Project Card (33% width) */}
          <div className="w-full md:w-[33%] p-4">
            <ProjectCard
              name={"Ensign College - Lamps"}
              logo={"/Ensign_CollegeLogo.png"}
              content={
                "This project was another RPG I got to be a part of. In this one I was in charge of all the NPC's of the game, handling their dialog, movements, and interactivity with the main player. I also created the main character and his movement for this project."
              }
              link={"https://github.com/Unity-Group-4/Lamps-Hub"}
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
