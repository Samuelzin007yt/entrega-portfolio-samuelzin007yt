import HeaderApp from "./Componets/Header";
import HeaderContentApp from "./Componets/Header/HeaderContent";
import MainContentApp from "./Componets/Header/MainContent";
import SectionAboutMe from "./Componets/Header/SectionDesc";
import RenderTechnologies from "./Componets/Header/TechnologiesSection";
import { technologies } from "../src/data/technologies.js";
import "./styles/index.css";
import RenderProjects from "./Componets/Header/SectionProjects";
import { projects } from "../src/data/projects.js";
import Contact from "./Componets/Header/Contact";
import "./styles/globalstyles.css";

function App() {
  return (
    <>
      <HeaderApp>
        <HeaderContentApp />
      </HeaderApp>
      <MainContentApp />
      <SectionAboutMe />
      <RenderTechnologies cardsList={technologies} />
      <RenderProjects listProjects={projects} />
      <Contact />
    </>
  );
}

export default App;
