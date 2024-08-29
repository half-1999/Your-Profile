import React from "react";
import { FaUser, FaBriefcase, FaGraduationCap, FaTrophy, FaDocker, FaJsSquare, FaAws, FaBuilding, FaCalendarAlt, FaTasks, FaCode, FaDownload } from "react-icons/fa";
import Testimonials from "../Components/About/Testimonials";
import { introductionData } from "../utils/data";
import { AiFillHtml5, AiFillDatabase, AiOutlineApi } from "react-icons/ai";
import {
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGit,
  DiGithubBadge,
} from "react-icons/di";
import {
  SiTypescript,
  SiFirebase,
  SiMysql,
  SiRedis,
  SiAngular,
  SiPostman,
  SiD3Dotjs,
  SiElectron,
  SiNextdotjs,
} from "react-icons/si";
import { BsFillGearFill } from "react-icons/bs";
import { VscVscodeInsiders } from "react-icons/vsc";
import Resume from '../Components/About/Resume'
import AboutImg from '../assets/Banner.jpg'
const AboutPage = () => {
  const handleResume = () => {
    window.open('https://drive.google.com/file/d/1YskO4VNHZEvAMU00c5eSoaYK69NHr2gk/view?usp=sharing')
  }
  return (
    <div className="bg-gray-100">
      {/* Introduction */}
      <div className="bg-white rounded-2xl shadow-lg mb-2 mx-auto">
        
        <img src={AboutImg} className="rounded-lg mb-5"/>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold flex items-center justify-between text-[#15445a]">
            <div className="flex">
              <FaBriefcase className="mr-3 mt-1" /> Professional Journey
            </div>
            <div className="" onClick={handleResume}>
              <FaDownload className="mr-3 cursor-pointer text-blue-600 hover:text-red-600 text-2xl hover:text-3xl duration-500"  title="Resume" /> 
            </div>
          </h3>
          <div className="space-y-2 shadow-xl p-1 rounded-md">
            <p className=" text-md text-justify">
              {introductionData.summary}
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-medium flex items-center text-[#15445a]">
              <FaGraduationCap className="mr-3" /> Career Path
            </h4>
            {introductionData.experience.map((job, index) => (
              <div key={index} className="pl-6 space-y-1 border-l-4 border-[#15445a]">
                <h5 className="text-md font-medium flex items-center"> <FaBuilding className="mr-2 text-[#15445a]" /> {job.company}</h5>
                <p className="text-black flex items-center"> <FaCalendarAlt className="mr-2 text-[#15445a]" /> {job.duration}</p>
                <strong>Role:</strong> {job.role}
                <ul className="list-disc ml-2 text-black space-y-1">
                    <strong className="flex items-center"><FaTasks className="mr-2 text-[#15445a]" />Responsibilities:</strong>
                    <ul className="list-disc ml-5 text-justify">
                      {job.responsibilities.map((responsibility, idx) => (
                        <li key={idx}>{responsibility}</li>
                      ))}
                    </ul>
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-xl font-semibold flex items-center mb-3 text-[#15445a]">
            <FaGraduationCap className="mr-3" /> Education
          </h3>
          {introductionData.education.map((edu, index) => (
            <div key={index} className="space-y-2 pb-2 mb-2 shadow-xl p-1 rounded-xl">
              <h4 className="text-xl font-medium">{edu.institution}</h4>
              <p className="text-black">{edu.degree}, {edu.year}</p>
              <ul className="list-disc ml-5 text-black">
                <li><strong>Courses:</strong></li>
                {edu.courses.map((course, idx) => (
                  <li key={idx}>{course}</li>
                ))}
              </ul>
              <ul className="list-disc ml-5 text-black">
                <li><strong>Activities:</strong></li>
                {edu.activities.map((activity, idx) => (
                  <li key={idx}>{activity}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-5 cursor-pointer">
          <h3 className="text-xl font-semibold flex items-center text-[#15445a] mb-6">
            <FaTrophy className="mr-3" /> Skills
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
            {/* Skill Cards */}
            {[
              { icon: <FaJsSquare className="text-yellow-400 text-xl" />, label: 'JavaScript' },
              { icon: <SiTypescript className="text-blue-600 text-xl" />, label: 'TypeScript' },
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
              { icon: <VscVscodeInsiders className="text-blue-500 text-xl" />, label: 'VSCode' },
              { icon: <SiPostman className="text-orange-500 text-xl" />, label: 'Postman' },
              { icon: <FaAws className="text-orange-500 text-xl" />, label: 'AWS' },
              { icon: <SiAngular className="text-red-600 text-xl" />, label: 'Angular' },
            ].map((skill, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 hover:bg-gray-200 p-2 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 border"
              >
                {skill.icon}
                <span className="text-black text-md">{skill.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-xl mb-3 font-semibold flex items-center text-[#15445a]">
            <FaTrophy className="mr-3" /> Certifications
          </h3>
          <ul className="list-disc ml-5 text-black space-y-2 text-sm shadow-2xl p-1 rounded-xl">
            <li>MERN Stack Development - 9-month Full Stack Web Development Certificate from Ducat India Noida</li>
            <li>AWS Certified Solutions Architect - Certification for designing distributed systems on AWS.</li>
            <li>React Developer Certification - Advanced certification in React development by Udemy</li>
          </ul>
          </div>
          </div>
          <Testimonials />
    </div>
  );
};

export default AboutPage;
