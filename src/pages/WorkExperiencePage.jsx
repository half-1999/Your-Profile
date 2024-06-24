import React from "react";
import {
  FaBriefcase,
  FaBuilding,
  FaCalendarAlt,
  FaTasks,
  FaTrophy,
} from "react-icons/fa";
import { companies } from "../utils/data";

const WorkExperiencePage = () => {
  return (
    <div className="py-5">
      <div className="bg-white p-6 rounded-2xl shadow-2xl mb-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaBriefcase className="mr-2" /> Work Experience
        </h2>
        <div className="space-y-6 ">
          {companies.map((company) => (
            <div
              key={company.id}
              className=" p-4 rounded-2xl shadow-2xl bg-gray-300"
            >
              <h3 className="text-xl font-semibold flex items-center">
                <FaBuilding className="mr-2" /> {company.name}
              </h3>
              <p className="text-gray-700 flex items-center">
                <FaCalendarAlt className="mr-2" /> {company.startDate} -{" "}
                {company.endDate}
              </p>
              <div className="ml-4 space-y-2">
                <h4 className="text-lg font-medium">{`Role: ${company.role}`}</h4>
                <h5 className="text-md font-medium flex items-center">
                  <FaTasks className="mr-2" /> Responsibilities
                </h5>
                <ul className="list-disc ml-5">
                  {company.responsibilities.map((resp, index) => (
                    <li key={index} className="text-gray-700">
                      {resp}
                    </li>
                  ))}
                </ul>
                <h5 className="text-md font-medium flex items-center">
                  <FaTrophy className="mr-2" /> Achievements
                </h5>
                <ul className="list-disc ml-5">
                  {company.achievements.map((ach, index) => (
                    <li key={index} className="text-gray-700">
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperiencePage;
