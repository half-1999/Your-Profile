import { Carousel } from "react-responsive-carousel";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

import PtacDashBoard from '../assets/PtacDashBoard.png'
import BajajChetak from '../assets/BajajChetak.png'
import Shikshamitra from '../assets/Shikshamitra.png'
import ArtificialEdu from '../assets/ArtificialEdu.png'
import Erthpot from '../assets/Erthpot.png'
import Ados from '../assets/Ados.png'
import HitTheBlack from '../assets/Hit the Black.png'
import MathQuiz from '../assets/MathQuiz.png'
import TechJobs from '../assets/TechJobs.png'
import portfolioReact from '../assets/portfolioReact.png'
import PortFolio from '../assets/Portfolio.png'
import CP2 from '../assets/CP2.png'
import CP3 from '../assets/CP3.png'
import CP4 from '../assets/CP4.png'
import CP5 from '../assets/CP5.png'
import CP6 from '../assets/CP6.png'
import Blog1 from '../assets/Blog1.png'
import Blog2 from '../assets/Blog2.png'
import Blog3 from '../assets/Blog3.png'
import { FaAws, FaBriefcase, FaDocker, FaGraduationCap, FaJsSquare, FaProjectDiagram, FaTrophy } from "react-icons/fa";
import { introductionData } from "../utils/data";
import { SiAngular, SiD3Dotjs, SiElectron, SiFirebase, SiMysql, SiNextdotjs, SiPostman, SiRedis, SiTypescript } from "react-icons/si";
import { AiFillDatabase, AiOutlineApi } from "react-icons/ai";
import { DiGit, DiGithubBadge, DiMongodb, DiNodejsSmall, DiReact } from "react-icons/di";
import { BsFillGearFill } from "react-icons/bs";




const LandingImages = {
  title: "Landing Image",
  images: [
    CP6,
    Blog1,
    portfolioReact,
    PtacDashBoard,
    CP5,
    BajajChetak,
    Shikshamitra,
    Blog2,
    ArtificialEdu,
    CP4,
    Erthpot,
    Ados,
    HitTheBlack,
    CP3,
    MathQuiz,
    TechJobs,
    Blog3,
    PortFolio,
    CP2,
  ]
};
function LandingPage() {
  return (
    <div className="">
      <div className="">
      <div className="relative z-10">
          <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} interval={2000} >
            {LandingImages.images.map((img, index) => (
              <div key={index}>
                <img
                  src={img}
                  alt={`${LandingImages.title} ${index + 1}`}
                  className="rounded-md shadow-md"
                />
              </div>
            ))}
          </Carousel>

        </div>
        <div className="space-y-2">
            <h3 className="text-xl font-semibold flex items-center text-[#15445a]">
              <FaBriefcase className="mr-3" /> Professional Journey
            </h3>
            <div className="space-y-2 p-1 rounded-md">
              <p className=" text-md text-justify">
                {introductionData.summary}
              </p>
            </div>
        </div>
        <div className="mt-5 cursor-pointer">
          <h3 className="text-xl font-semibold flex items-center text-[#15445a] mb-3">
            <FaTrophy className="mr-3" /> Skills
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
            {/* Skill Cards */}
            {[
              { icon: <SiTypescript className="text-blue-600 text-xl" />, label: 'TypeScript' },
              { icon: <FaJsSquare className="text-yellow-400 text-xl" />, label: 'JavaScript' },
              { icon: <AiFillDatabase className="text-black text-xl" />, label: 'SQL' },
              { icon: <DiReact className="text-blue-600 text-xl" />, label: 'React' },
              { icon: <DiNodejsSmall className="text-green-600 text-xl" />, label: 'Node.js' },
              { icon: <DiNodejsSmall className="text-black text-xl" />, label: 'Express' },
              { icon: <DiMongodb className="text-green-500 text-xl" />, label: 'MongoDB' },
              { icon: <DiGit className="text-orange-500 text-xl" />, label: 'Git' },
              { icon: <DiGithubBadge className="text-black text-xl" />, label: 'GitHub' },
              { icon: <AiOutlineApi className="text-black text-xl" />, label: 'JWT' },
              { icon: <SiFirebase className="text-yellow-500 text-xl" />, label: 'Firebase' },
              { icon: <SiMysql className="text-blue-600 text-xl" />, label: 'MySQL' },
              { icon: <SiNextdotjs className="text-black text-xl" />, label: 'Next.js' },
              { icon: <AiOutlineApi className="text-black text-xl" />, label: 'WebSockets' },
              { icon: <SiElectron className="text-black text-xl" />, label: 'Electron' },
              { icon: <AiOutlineApi className="text-black text-xl" />, label: 'Phaser' },
              { icon: <SiD3Dotjs className="text-black text-xl" />, label: 'D3.js' },
              { icon: <SiRedis className="text-red-600 text-xl" />, label: 'Redis' },
              { icon: <BsFillGearFill className="text-blue-50 text-xl" />, label: 'VSCode' },
              { icon: <SiPostman className="text-orange-500 text-xl" />, label: 'Postman' },
              { icon: <FaDocker className="text-blue-600 text-xl" />, label: 'Docker' },
              { icon: <BsFillGearFill className="text-blue-600 text-xl" />, label: 'Jenkins' },
              { icon: <FaAws className="text-orange-500 text-xl" />, label: 'AWS' },
              { icon: <SiAngular className="text-red-600 text-xl" />, label: 'Angular' },
            ].map((skill, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 hover:bg-gray-200 p-2 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
              >
                {skill.icon}
                <span className="text-black text-md">{skill.label}</span>
              </div>
            ))}
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default LandingPage;
