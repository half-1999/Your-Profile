import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  const [projectsData] = useState([
    // Games
    {
      _id: 1,
      title: "MOBA Game",
      category: "Games",
      description: "Real-time multiplayer game using WebSockets.",
      technologies: "WebSockets",
    },
    {
      _id: 2,
      title: "2D Platformer",
      category: "Games",
      description: "Built with Phaser and Node.js backend.",
      technologies: "Phaser, Node.js",
    },
    {
      _id: 3,
      title: "Puzzle Game",
      category: "Games",
      description: "React frontend and Express backend.",
      technologies: "React, Express",
    },
    {
      _id: 4,
      title: "Strategy Game",
      category: "Games",
      description: "Turn-based game using MERN stack.",
      technologies: "MERN stack",
    },
    {
      _id: 5,
      title: "Card Game",
      category: "Games",
      description: "Multiplayer card game with React and Firebase.",
      technologies: "React, Firebase",
    },
    {
      _id: 6,
      title: "Educational Game",
      category: "Games",
      description: "Learning-based game using React and MongoDB.",
      technologies: "React, MongoDB",
    },
    {
      _id: 7,
      title: "Trivia Game",
      category: "Games",
      description: "Real-time trivia game with Node.js and WebSockets.",
      technologies: "Node.js, WebSockets",
    },

    // Web Development
    {
      _id: 8,
      title: "E-commerce Platform",
      category: "Web Development",
      description:
        "Full-featured e-commerce site with shopping cart, payment gateway.",
      technologies: "React, Node.js, Express, MongoDB, JWT, Stripe API",
    },
    {
      _id: 9,
      title: "Social Media App",
      category: "Web Development",
      description:
        "Social networking site with real-time chat and notifications.",
      technologies: "React, Node.js, WebSocket",
    },
    {
      _id: 10,
      title: "Blog Platform",
      category: "Web Development",
      description:
        "Blogging site with markdown support and user authentication.",
      technologies: "React, Node.js, Express, Markdown",
    },
    {
      _id: 11,
      title: "Portfolio Site",
      category: "Web Development",
      description: "Personal portfolio with project showcase.",
      technologies: "React, HTML, CSS",
    },
    {
      _id: 12,
      title: "Task Manager",
      category: "Web Development",
      description: "Task and project management tool.",
      technologies: "React, Firebase",
    },
    {
      _id: 13,
      title: "Online Learning Platform",
      category: "Web Development",
      description: "E-learning site with courses and quizzes.",
      technologies: "React, Node.js, MongoDB",
    },
    {
      _id: 14,
      title: "Job Portal",
      category: "Web Development",
      description: "Job search and application site.",
      technologies: "React, Node.js, Express",
    },

    // Software Development
    {
      _id: 15,
      title: "Inventory Management System",
      category: "Software Development",
      description: "Desktop application for inventory tracking.",
      technologies: "Electron, React, Node.js",
    },
    {
      _id: 16,
      title: "CRM System",
      category: "Software Development",
      description:
        "Customer relationship management system for sales management.",
      technologies: "React, Node.js, MongoDB",
    },
    {
      _id: 17,
      title: "Point of Sale (POS)",
      category: "Software Development",
      description: "POS system for retail stores.",
      technologies: "React, Node.js, Express",
    },
    {
      _id: 18,
      title: "Library Management System",
      category: "Software Development",
      description: "Software for managing library operations.",
      technologies: "Java, Spring Boot",
    },
    {
      _id: 19,
      title: "Billing System",
      category: "Software Development",
      description: "Automated billing and invoicing system.",
      technologies: "Python, Django",
    },
    {
      _id: 20,
      title: "Healthcare Management System",
      category: "Software Development",
      description: "System for managing healthcare records and appointments.",
      technologies: "React, Node.js, PostgreSQL",
    },
  ]);

  const categories = [
    "Show All",
    "Games",
    "Web Development",
    "Software Development",
  ];
  const [selectedCategory, setSelectedCategory] = useState("Show All");

  const filterProjects = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
    selectedCategory === "Show All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <div className="py-5">
      {/* Projects Page Header */}
      <div className="bg-white p-6 rounded-2xl shadow-2xl mb-6">
        <h2 className="text-2xl font-semibold mb-4">Projects Page</h2>
        {/* Filter Buttons */}
        <div className="flex space-x-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`py-2 px-4 rounded-xl ${
                selectedCategory === category
                  ? "bg-gray-300 text-gray-800"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
              onClick={() => filterProjects(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Display Projects in Rows */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProjects.map((project) => (
          <div
            key={project._id}
            className="bg-gray-300 p-6 rounded-2xl shadow-2xl"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex items-center justify-between">
              <p className="text-gray-500">{project.technologies}</p>
              <Link
                to={`/projects/${project._id}`}
                className="text-blue-500 hover:underline"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
