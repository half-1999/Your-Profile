import React from "react";
import { BsFillAwardFill, BsFillGearFill } from "react-icons/bs";
import { FaBriefcase, FaFileDownload, FaGraduationCap } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { AiFillHtml5, AiFillDatabase, AiOutlineApi } from "react-icons/ai";
import {
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGit,
  DiGithubBadge,
} from "react-icons/di";
import {
  SiJavascript,
  SiTypescript,
  SiFirebase,
  SiMysql,
  //   SiNextDotJs,
  SiRedis,
  SiDocker,
} from "react-icons/si";
import { resumeData } from "../../utils/data";

const skillsIcons = {
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  SQL: <AiFillDatabase />,
  React: <DiReact />,
  NodeJs: <DiNodejsSmall />,
  MongoDB: <DiMongodb />,
  Git: <DiGit />,
  GitHub: <DiGithubBadge />,
  "REST API": <AiOutlineApi />,
  Firebase: <SiFirebase />,
  "MS SQL Server": <AiFillDatabase />,
  MySQL: <SiMysql />,
  //   "Next.js": <SiNextDotJs />,
  WebSockets: <AiOutlineApi />,
  //   Electron: <RiElectronLine />,
  Phaser: <AiOutlineApi />, // Assuming there's no specific icon, using API icon as placeholder
  "D3.js": <AiOutlineApi />, // Assuming there's no specific icon, using API icon as placeholder
  JWT: <AiOutlineApi />, // Assuming there's no specific icon, using API icon as placeholder
  Redis: <SiRedis />,
  VSCode: <BsFillGearFill />,
  Postman: <BsFillGearFill />,
  Docker: <SiDocker />,
  Jenkins: <BsFillGearFill />,
};

const Resume = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-2xl mb-6">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <FaFileDownload className="mr-2" /> Resume
      </h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-medium">Download Link</h3>
          <p>
            <a
              href="https://drive.google.com/file/d/12T3BYPtnBVWW0LqwzeOlAUN25xqftub7/view?usp=sharing"
              download="Resume.pdf"
              className="text-indigo-600 hover:underline flex items-center"
            >
              <FaFileDownload className="mr-2" />
              Download Resume
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium">Key Sections</h3>
          <div className="ml-4 space-y-2">
            <h4 className="text-lg font-medium flex items-center">
              <FaGraduationCap className="mr-2" /> Education
            </h4>
            <p>
              {resumeData.education[0].degree} from{" "}
              {resumeData.education[0].institution},{" "}
              {resumeData.education[0].year}
            </p>
            <h4 className="text-lg font-medium flex items-center">
              <FaBriefcase className="mr-2" /> Work Experience
            </h4>
            <ul className="list-disc ml-5">
              {resumeData.experience.map((job, index) => (
                <li key={index}>
                  {job.company} ({job.duration})
                  <ul className="ml-5">
                    <li>{job.role}</li>
                    <li>{job.responsibilities.join(", ")}</li>
                  </ul>
                </li>
              ))}
            </ul>
            <h4 className="text-lg font-medium flex items-center ">
              <GiSkills className="mr-2" /> Skills
            </h4>
            <ul className="list-disc ml-5 flex flex-wrap gap-4 bg-gray-200 shadow-2xl p-2">
              {resumeData.skills.map((skill, index) => (
                <li key={index} className="flex items-center space-x-1">
                  {skillsIcons[skill]}
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
            <h4 className="text-lg font-medium flex items-center">
              <BsFillGearFill className="mr-2" /> Projects
            </h4>
            <ul className="list-disc ml-5">
              {resumeData.projects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
            <h4 className="text-lg font-medium flex items-center">
              <BsFillAwardFill className="mr-2" /> Certifications
            </h4>
            <ul className="list-disc ml-5">
              {resumeData.certifications.map((certification, index) => (
                <li key={index}>{certification}</li>
              ))}
            </ul>
            <h4 className="text-lg font-medium">References</h4>
            <p>Available upon request</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
