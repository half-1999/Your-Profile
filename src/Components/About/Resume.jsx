import React from "react";
import image from "../../assets/Pic.png";
import {
  BsFillAwardFill,
  BsFillGearFill,
  BsFillPhoneFill,
  BsFillGeoAltFill,
} from "react-icons/bs";
import { FaLinkedin, FaGithub, FaFileCode, FaMailBulk } from "react-icons/fa";
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
  SiRedis,
  SiDocker,
} from "react-icons/si";
import { resumeData } from "../../utils/data";
import { MdContactMail } from "react-icons/md";

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
  WebSockets: <AiOutlineApi />,
  Phaser: <AiOutlineApi />,
  "D3.js": <AiOutlineApi />,
  JWT: <AiOutlineApi />,
  Redis: <SiRedis />,
  VSCode: <BsFillGearFill />,
  Postman: <BsFillGearFill />,
  Docker: <SiDocker />,
  Jenkins: <BsFillGearFill />,
};

const Resume = () => {
  return (
    <div className="bg-blue-50 p-2 rounded-xl shadow-lg border border-black">
      {/* Top Section */}
      <div className="bg-blue-600 text-white p-6 rounded-lg flex justify-between items-center w-full">
        <div className="w-4/5">
          <h1 className="text-4xl font-bold">Aman Sharma</h1>
          <p className="mt-2 text-md text-justify">
            MERN Stack virtuoso proficient in Node.js, Express.js, React, and MongoDB. I
            develop scalable websites and software by integrating a dynamic front-end with
            a reliable backend. Ready to unleash the power of MERN to enhance user
            experiences and foster creativity in an energetic team.
          </p>
        </div>
        <div className="w-1/5 justify-end mx-auto ml-[10%]">
          <img
            src={image}
            alt="Aman Sharma"
            className="rounded-full w-32 h-32 object-cover border-4 border-white"
          />
        </div>
      </div>
      {/* Contact and Social Links */}
      <div className=" flex justify-between items-center bg-gray-300 shadow-lg p-3 rounded-lg mt-1">
        <div className="space-y-3 flex gap-2">
          <p className="flex items-center text-sm mt-3">
            <BsFillPhoneFill className="text-xl " />
            +91 12345 67890
          </p>
          <p className="flex items-center text-sm">
            <MdContactMail className="mr-1 text-xl" />
            your.email@example.com
          </p>
          <p className="flex items-center text-sm">
            <BsFillGeoAltFill className="mr-1 text-xl" />
            Noida, Uttar Pradesh, India
          </p>
          
        </div>
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/yourprofile/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-blue-600 hover:text-blue-800"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 hover:text-gray-800"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://yourportfolio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-indigo-600 hover:text-indigo-800"
            title="Portfolio"
          >
            <FaFileCode />
          </a>
        </div>
      </div>


      {/* Main Content */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          {/* Education Section */}
          <div className="mb-5 ">
          <h3 className="text-xl font-semibold text-blue-600 mb-1">EDUCATION</h3>
          <div className="flex gap-1">
            <div className="border-r border-black p-1">
                <div className="flex justify-between">
                <h4 className="text-md font-bold">BTech</h4>
                <p className="text-gray-600 text-sm">2018 - 2022</p>
                </div>
              <p className="text-sm font-semibold">Score : <span>80 % </span></p>
              <p className="text-sm">Dr. APJ Abdul Kalam Technical University, Lucknow</p>
            </div>
            <div className="border-r border-black p-1">
                <div className="flex justify-between">
                <h4 className="text-md font-medium">XIITH</h4>
                <p className="text-gray-600 text-sm">2016 - 2018</p>
                </div>
              <p className="text-sm font-semibold">Score : <span>75 % </span></p>
              <p className="text-sm">Aligarh Muslim University, Aligarh</p>
            </div>
            <div className="border-r border-black p-1">
                <div className="flex justify-between">
                <h4 className="text-md font-medium">XTH</h4>
                <p className="text-gray-600 text-sm">2016 - 2018</p>
                </div>
              <p className="text-sm font-semibold">Score : <span>88 % </span></p>
              <p className="text-sm">Aligarh Muslim University, Aligarh</p>
            </div>
            </div>
          </div>

          {/* Work Experience Section */}
          <div className="mb-5">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">WORK EXPERIENCE</h3>
            {resumeData.experience.map((job, index) => (
              <div key={index} className="mb-6">
                <h4 className="text-xl font-medium">{job.role}</h4>
                <p>{job.company}</p>
                <p className="text-gray-600">{job.duration}</p>
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  {job.responsibilities.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              CERTIFICATIONS
            </h3>
            <ul className="list-disc ml-5 space-y-1">
              {resumeData.certifications.map((certification, index) => (
                <li key={index}>{certification}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div>
          {/* Skills Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">SKILLS</h3>
            <ul className="flex flex-wrap gap-4">
              {resumeData.skills.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-2 bg-gray-100 p-2 rounded-lg shadow"
                >
                  <div className="text-blue-600">{skillsIcons[skill]}</div>
                  <span className="text-lg">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">PROJECTS</h3>
            <ul className="list-disc ml-5 space-y-2">
              {resumeData.projects.map((project, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span>{project}</span>
                  {project.isLive && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                      title="Live Project"
                    >
                      🔗
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Interests Section */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">INTERESTS</h3>
            <ul className="list-disc ml-5 space-y-1">
              {resumeData.interests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
