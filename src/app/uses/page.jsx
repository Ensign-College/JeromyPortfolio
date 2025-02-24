import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import DropdownClient from "@/components/DropDown/DropdownClient";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import UsesText from "@/components/UsesText/UsesText";
import UsesSection from "@/components/UsesSection/UsesSection";

export const metadata = {
  title: "Portfolio - Uses",
  description: "The uses page of my portfolio.",
};

const items = [
  {
    groupName: "Workstation",
    items: [
      {
        title: "Custom Laptop from PC Laptops",
        description:
          "My primary workstation right now is this laptop, which is from a company called PC Laptops here in Salt Lake. They do a pretty good job with what they do, and it lowers the barriers of entry for building your own laptop or PC. Mine has 16 GB of RAM, with an AMD Ryzen 5 5500U Processor.",
      },
      {
        title: "RIG 800HS Gaming Headset",
        description:
          "While I don't have much time for gaming these days, these headphones have been great. They're comfortable, sound good enough, and I've never had any problems with them.",
      },
    ],
  },
  {
    groupName: "Development",
    items: [
      {
        title: "Visual Studio Code",
        description:
          "I use VS Code for any web development I do. I love how customizable it is, and how much you can actually do with it.",
      },
      {
        title: "Unity",
        description:
          "This is my primary game engine for game development, for now at least. I've found that it's really great for 2D games, as well as for the few board game implementations I've done. It's also very beginner friendly, so I'ts been a good way to get my feet wet in terms of game development.",
      },
      {
        title: "IntelliJ",
        description:
          "This is my primary IDE for Java programming. While VS code handles java just fine, this software specifically knows Java much better, and I find it much easier to work with when it comes to Java coding specifically.",
      },
    ],
  },
  {
    groupName: "Design",
    items: [
      {
        title: "Figma",
        description:
          "I was recently introduced to Figma during a web development class, and I've found it extremely useful for planning how my websites are created.",
      },
      {
        title: "Photoshop",
        description:
          "I can't even begin to say how useful photoshop has ended up being for me. It lets me customize and create assets, clip icons and pictures out so they don't interfere with background colors, make animations, and much more. This is one software I use so much, it's been worth the admittedley high price.",
      },
      {
        title: "Canva",
        description:
          "While I recently discovered Figma, Canva was what I was familiar with from before. They ahve a really great AI for generating logos and coming up with new ideas.",
      },
    ],
  },
  {
    groupName: "Productivity",
    items: [
      {
        title: "Jira",
        description:
          "I use Jira for keeping track of all my current scrum assignments and future project planning. If I have a project, I undoubtably have a Jira connected with it to keep me on track with what I need to be doing next or to assign out new work.",
      },
      {
        title: "Microsoft 365",
        description:
          "I have use the Microsoft suite of apps for just about as long as I've been around, and they are enormously helpful. They've gotten even better now that they have cloud integration, letting me collaborate on documents in real time with other people.",
      },
    ],
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

export default function Uses() {
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
            <UsesText />
          </div>
        </div>
        <div className="ml-10 left-0">
          <UsesSection items={items} />
        </div>
      </div>

      {/* Footer */}
      <div className={"page"}>
        <header>{/* placeholder */}</header>
        <main>{/* placeholder */}</main>
        <Footer links={links} />
      </div>
    </>
  );
}
