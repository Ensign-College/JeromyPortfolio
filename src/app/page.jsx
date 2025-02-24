import Navbar from "@/components/Navbar/Navbar.jsx";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import SignupWidget from "@/components/SignupWidget/SignupWidget";
import WorkWidget from "@/components/WorkWidget/WorkWidget";
import SkillsWidget from "@/components/SkillsWidget/SkillsWidget";
import Footer from "@/components/Footer/Footer";
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import DropdownClient from "@/components/DropDown/DropdownClient";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";

const articles = [
  {
    date: "Feb 20, 2025",
    title: "Board Games came before video games",
    content:
      "One of my passions is gaming, but specifically board gaming. I love the strategy, creativity, and social interaction that board games bring to the table—literally! Many" +
      " of my practice projects have been me making digital implementations of different board games I enjoy, like Catan, Ticket to Ride, and Carcassonne. It’s a fun way to " +
      "combine my love for gaming with my passion for coding, and it challenges me to think critically about game mechanics, user experience, and problem-solving. Whether it’s " +
      "recreating a classic or adding my own twist, I find joy in bringing these games to life in a digital space.",
    link: "https://boardgamegeek.com/",
  },
  {
    date: "Feb 20, 2025",
    title: "Every journey begins with the first step",
    content:
      "For me, that step was clicking on this video introducing the basics of game development. Watching it sparked something in me—a curiosity and excitement to create my own" +
      " games. It was the first time I realized that game development wasn’t just a distant dream but something I could actively learn and pursue. That video opened the door to " +
      "a world of possibilities, and I haven’t looked back since. It’s amazing how one small moment can set you on a path you never imagined!",
    link: "https://www.youtube.com/watch?v=XtQMytORBmM",
  },
  {
    date: "Feb 20, 2025",
    title: "My game engine of choice...for now",
    content:
      "So far, all the games I have made have been done in the Unity game engine. I’ve created a couple of projects with Unity, including digital adaptations of board " +
      "games and small original concepts, which have taught me a lot about game design, scripting, and working with assets. While Unity has been an incredible tool to start my " +
      "journey, I’m excited to expand my horizons by learning other game engines like Unreal Engine and Godot in the future. Each engine has its own strengths, and I want to " +
      "explore them to broaden my skills and perspectives. Someday, I’d even love to take on the challenge of developing my own game engine—a tool tailored to bring my unique " +
      "ideas to life. For now, I’m focused on learning, experimenting, and creating one game at a time!",
    link: "https://unity.com/pages/unity-pro-buy-now?utm_source=google&utm_medium=cpc&utm_campaign=cc_dd_upr_amer_amer-t1_en_pu_sem-gg_acq_br-pr_2023-01_brand-at1_cc3022_ev-br_id:71700000105927797&utm_content=cc_dd_upr_amer_pu_sem_gg_ev-br_pros_x_npd_cpc_kw_sd_all_x_x_brand_id:58700008262791723&utm_term=unity%20engine&&&&&gad_source=1&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s1CpjIQ9M3FlKgWdmLrCvtjCK0_02iMSj0eaOhnvCL5024K0q-Sgv0aAnwQEALw_wcB&gclsrc=aw.ds",
  },
];

const skills = [
  { name: "Java", proficiency: 90, icon: "JavaLogo.png" },
  { name: "C#", proficiency: 90, icon: "CSharpLogo.png" },
  { name: "HTML", proficiency: 70, icon: "html5.png" },
  { name: "CSS", proficiency: 70, icon: "css3.png" },
  { name: "JavaScript", proficiency: 50, icon: "javascript.png" },
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
  title: "Portfolio - Home",
  description: "Home page of my portfolio.",
};

export default function Home() {
  return (
    <>
      <div className="bg-white dark:bg-gray-800">
        {/* Navbar: Hidden on small screens, visible on medium and larger screens */}
        <div className="hidden md:block bg-white dark:bg-gray-800 p-0 m-0 top-0">
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

        {/* Profile Card: Above the two columns, 70% width */}
        <div className="w-[70%] mt-6">
          <ProfileCard />
        </div>

        {/* Main Content: Two-column layout */}
        <div className="flex flex-col md:flex-row min-h-screen bg-white dark:bg-gray-800">
          {/* Left Column: Article Cards (60% width) */}
          <div className="w-full md:w-[60%] p-6">
            <div className="space-y-6">
              {articles.map((article, index) => (
                <ArticleCard
                  key={index}
                  date={article.date}
                  title={article.title}
                  content={article.content}
                  link={article.link}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Widgets (40% width) */}
          <div className="w-full md:w-[40%] p-6">
            <div className="space-y-6">
              <SignupWidget
                title={"Stay up to date"}
                content={"Get notified when I publish something new, and unsubscribe at any time."}
              />
              <WorkWidget
                title={"Work"}
                content={"My work experience."}
                experiences={[
                  {
                    logo: "/ABMLogo.png",
                    organization: "ABM Industries",
                    jobTitle: "District Manager",
                    startYear: 2016,
                    endYear: 2021,
                  },
                  {
                    logo: "/DeseretBookLogo.png",
                    organization: "Deseret Book",
                    jobTitle: "Warehouse Associate",
                    startYear: 2024,
                    endYear: "Current",
                  },
                  {
                    logo: "/Ensign_CollegeLogo.png",
                    organization: "Ensign College",
                    jobTitle: "Student",
                    startYear: 2021,
                    endYear: "Current",
                  },
                ]}
              />
              <SkillsWidget
                title={"Skills"}
                content={"These are the current programming languages in which I am proficient."}
                skills={skills}
              />
            </div>
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
