import { useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import LandingPage from "./LandingPage";
import BlogPage from "./BlogPage";
import Contact from "./ContactPage";
import WorkExperience from "./WorkExperiencePage";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import Admin from "./Admin";
import Sidebar from "../Components/SideBar";
import Navbar from "../Components/Navbar";
import PageNotFound from "./404";
import BlogDetailPage from "./BlogDetails";
import ProjectsDetailPage from "./ProjectDetail";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const navigate = useNavigate();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 h-screen">
      {/* Left Sidebar */}
      <div
        className={`md:col-span-2 lg:col-span-1 md:col-start-1 md:row-start-1 bg-[#03A9F4] p-4 overflow-y-auto ${
          isSidebarOpen ? "block" : "hidden"
        } md:block`}
      >
        <Sidebar />
        <div className="mt-5">
          <Navbar />
        </div>
      </div>

      {/* Hamburger Menu Icon (visible on mobile) */}
      <div className="md:hidden">
        <button
          onClick={toggleSidebar}
          className="block text-gray-800 hover:text-gray-900 focus:outline-none focus:text-gray-900"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Right Content Area */}
      <div className="md:col-span-3 lg:col-span-4 md:row-start-1 p-4 overflow-y-auto bg-[#03A9F4]">
        <div className="space-y-4">
          {/* Route content based on URL */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogDetailPage />} />
            <Route path="/work-experience" element={<WorkExperience />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectsDetailPage />} />
            <Route
              path="/admin"
              element={isLoggedIn ? <Admin /> : <navigate to="/404" />}
            />
            <Route path="*" element={<navigate to="/404" />} />
            <Route path="/404" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
