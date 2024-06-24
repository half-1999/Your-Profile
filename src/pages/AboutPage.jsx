import React from "react";
import { FaUser, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { BsFillAwardFill } from "react-icons/bs";
import Resume from "../Components/About/Resume";
import Testimonials from "../Components/About/Testimonials";
import { introductionData } from "../utils/data";

// Sample data for introduction and career path

const AboutPage = () => {
  return (
    <div className="py-5">
      {/* Introduction */}
      <div className="bg-white p-6 rounded-2xl shadow-2xl mb-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaUser className="mr-2" /> About Page
        </h2>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center">
            <FaBriefcase className="mr-2" /> Professional Journey
          </h3>
          <div className="space-y-2">
            <h4 className="text-lg font-medium">Introduction</h4>
            <p className="text-gray-700">"{introductionData.summary}"</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-medium flex items-center">
              <FaGraduationCap className="mr-2" /> Career Path
            </h4>
            {introductionData.experience.map((job, index) => (
              <div key={index} className="ml-4 space-y-2">
                <h5 className="text-md font-medium">{job.company}</h5>
                <p className="text-gray-700">{job.duration}</p>
                <ul className="list-disc ml-5">
                  <li>
                    <strong>Role:</strong> {job.role}
                  </li>
                  <li>
                    <strong>Responsibilities:</strong>
                    <ul className="list-disc ml-5">
                      {job.responsibilities.map((responsibility, idx) => (
                        <li key={idx}>{responsibility}</li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Resume Section */}
      <Resume />
      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
};

export default AboutPage;
