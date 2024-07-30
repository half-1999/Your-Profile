import { useState } from "react";
import { FaProjectDiagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { projects } from "../utils/data";

const ProjectsPage = () => {
  const projectsData = projects

  const categories = [
    "All",
    "Games",
    "Web Development",
    "Software Development",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterProjects = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <div className="">
      {/* Projects Page Header */}
      <div className=" p-3 rounded-2xl shadow-2xl mb-6">
        <h2 className="text-3xl font-bold mb-4 flex items-center text-[#15445a]"><FaProjectDiagram className="mr-2" /> Projects Page</h2>
        {/* Filter Buttons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`py-2 px-4 rounded-xl ${
                selectedCategory === category
                  ? "bg-[#131312] text-white"
                  : "bg-gray-100  hover:bg-gray-300"
              }`}
              onClick={() => filterProjects(category)}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Display Projects in Rows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {filteredProjects.map((project) => (
            <div
              key={project._id}
              className="bg-white shadow-md hover:bg-[#131312] duration-700 hover:text-white p-3 rounded-2xl cursor-pointer"
            >
            <Link
              to={`/projects/${project._id}`}
              className=""
            >
            <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md"
                />
              <h2 className="text-xl font-bold  text-[#15445a]">{project.title}</h2>
              <p className=" mb-4">{project.category}</p>
              <div className="flex items-center justify-between w-full">
                <p className="text-sm font-semibold w-1/2 text-justify">{project.technologies}</p>
                <p className="text-blue-600 font-semibold">View Details</p>
                  </div>
              </Link>
                  </div>
                ))}
        </div>
      </div>

    </div>
  );
};

export default ProjectsPage;
