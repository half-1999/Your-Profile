// frontend/src/pages/ProjectDetailPage.jsx
import React from "react";
import { FaCalendarAlt, FaTags } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import { projects } from "../utils/data";

// Sample projects data with images, stats, and comments for demonstration.
const projectsData = projects;

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p._id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="py-5">
      <div className="bg-gray-300 p-6 rounded-md shadow-md mb-6">
        <div className="m-4">
          <img
            src={project.image}
            alt={project.title}
            className="rounded-md shadow-md"
          />
        </div>
        <h2 className="text-3xl font-semibold mb-4">{project.title}</h2>
        <div className="flex items-center space-x-4 mb-4 text-gray-500">
          <span className="flex items-center">
            <FaTags className="mr-1" /> {project.category}
          </span>
          <span className="flex items-center">
            <FaCalendarAlt className="mr-1" /> Technologies:{" "}
            {project.technologies}
          </span>
        </div>
        <div className="text-gray-700 leading-relaxed">
          {project.description}
        </div>
      </div>

      {/* Project Stats */}
      <div className="bg-gray-300 p-6 rounded-2xl shadow-2xl mb-6">
        <h3 className="text-xl font-semibold mb-4">Project Stats</h3>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-gray-500">Monthly Views</p>
            <p className="font-semibold">{project.stats.monthlyViews}</p>
          </div>
          <div>
            <p className="text-gray-500">Downloads</p>
            <p className="font-semibold">{project.stats.downloads}</p>
          </div>
          <div>
            <p className="text-gray-500">Likes</p>
            <p className="font-semibold">{project.stats.likes}</p>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      <div className="bg-gray-300 p-6 rounded-2xl shadow-2xl mb-6">
        <h3 className="text-xl font-semibold mb-4">Related Projects</h3>
        <div className="grid grid-cols-3 gap-4">
          {projectsData
            .filter(
              (p) => p.category === project.category && p._id !== project._id
            )
            .slice(0, 3) // Limit to 3 related projects
            .map((relatedProject) => (
              <div key={relatedProject._id}>
                <Link
                  to={`/projects/${relatedProject._id}`}
                  className="text-blue-500 hover:underline"
                >
                  {relatedProject.title}
                </Link>
              </div>
            ))}
        </div>
      </div>

      {/* User Comments */}
      <div className="bg-gray-300 p-6 rounded-2xl shadow-2xl">
        <h3 className="text-xl font-semibold mb-4">User Comments</h3>
        {project.comments.map((comment) => (
          <div key={comment.id} className="mb-4">
            <p className="text-gray-600 mb-1">{comment.user}</p>
            <p className="text-gray-700">{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetailPage;
