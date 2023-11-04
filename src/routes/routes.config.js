import Showcase from "../components/General/Showcase";
import Work from "../components/General/Work";
import Skill from "../components/General/Skills";
import HomePage from "../components/General";
import Family from "../components/General/Family";
import Teacher from "../components/General/Teacher";
import Header from "../components/General/Header";
import Footer from "../components/General/Footer";
const routesConfig = [
  {
    path: "/",
    element: HomePage,
  },
  {
    path: "/header",
    element: Header,
  },
  {
    path: "/showcase",
    element: Showcase,
  },
  {
    path: "/work",
    element: Work,
  },
  {
    path: "/skill",
    element: Skill,
  },
  {
    path: "/family",
    element: Family,
  },
  {
    path: "/teacher",
    element: Teacher,
  },
  {
    path: "/contact",
    element: Footer,
  },
];
export default routesConfig;
