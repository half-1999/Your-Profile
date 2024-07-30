import React from "react";
import { FaCalendarAlt, FaTags } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import { projects } from "../utils/data";
import { FaEye, FaDownload, FaHeart, FaCode } from "react-icons/fa";

// Sample projects data with images, stats, and comments for demonstration.

const ProjectDetailPage = () => {
  const { id } = useParams();
  const projectsData = projects;
  const project = projectsData.find((p) => p._id === parseInt(id));
  console.log(project)
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="">
      <div className="rounded-md shadow-sm mb-6">
        <div className="m-4">
          <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} interval={2000} >
            {project.images.map((img, index) => (
              <div key={index}>
                <img
                  src={img}
                  alt={`${project.title} ${index + 1}`}
                  className="rounded-md shadow-md"
                />
              </div>
            ))}
          </Carousel>
        </div>
        <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <FaTags className="mr-1" /> {project.category}
          </span>
          </div>
          <span className="flex items-center text-sm">
            <FaCalendarAlt className="mr-1 " /> Technologies:{" "}
            {project.technologies}
          </span>
        <div className="text-md text-justify p-2">
          {project.description}
        </div>
      </div>

      {/* Project Stats */}
<div className="p-3 rounded-2xl mb-6 shadow-md bg-white">
      <h3 className="text-lg font-semibold mb-4">Project Stats</h3>
      <div className="grid grid-cols-2  md:grid-cols-4 gap-2">
        <div className="border border-gray-300 rounded-md hover:scale-95 transition-transform duration-300 flex items-center p-4">
          <FaEye className="text-xl mr-2" />
          <div>
            <p className="text-black">Monthly Views</p>
            <p className="font-semibold">{project.stats.monthlyViews}</p>
          </div>
        </div>

        <div className="border border-gray-300 rounded-md hover:scale-95 transition-transform duration-300 flex items-center p-4">
          <FaDownload className="text-xl mr-2" />
          <div>
            <p className="text-black">Downloads</p>
            <p className="font-semibold">{project.stats.downloads}</p>
          </div>
        </div>

        <div className="border border-gray-300 rounded-md hover:scale-95 transition-transform duration-300 flex items-center p-4">
          <FaHeart className="text-xl mr-2" />
          <div>
            <p className="text-black">Likes</p>
            <p className="font-semibold">{project.stats.likes}</p>
          </div>
        </div>

        <div className="border border-gray-300 rounded-md hover:scale-95 transition-transform duration-300 flex items-center p-4">
          <FaCode className="text-xl mr-2" />
          <div>
            <p className="text-black">Code</p>
            <p className="font-semibold">
              <a href="#" className="text-blue-500 hover:underline">Link</a>
            </p>
          </div>
        </div>
      </div>
    </div>

      {/* Related Projects */}
      <div className="p-3 bg-white shadow-lg rounded-2xl mb-6">
        <h3 className="text-lg font-semibold mb-4">Related Projects</h3>
        <div className="grid grid-cols-3 gap-4">
          {projectsData
            .filter(
              (p) => p.category === project.category && p._id !== project._id
            )
            .slice(0, 3) // Limit to 3 related projects
            .map((relatedProject) => (
              <div key={relatedProject._id} className="hover:scale-105 duration-700">
                <Link
                  to={`/projects/${relatedProject._id}`}
                  className="text-black font-semibold"
                >
                  <img
                    src={relatedProject.image}
                    alt={relatedProject.title}
                    className="rounded-md shadow-md mb-4"
                  />
                  {relatedProject.title}
                </Link>
              </div>
            ))}
        </div>
      </div>

      {/* User Comments */}
      
    </div>
  );
};

export default ProjectDetailPage;
