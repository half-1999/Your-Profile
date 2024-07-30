import { useEffect, useRef, useState } from "react";
import { Link, Routes, Route, useNavigate, useLocation } from "react-router-dom";
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
import SocialMediaIcons from "./SocialMediaIcons";
import WhatsAppButton from "./WhatsAppButton";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const contentRef = useRef(null);

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const { pathname } = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsSidebarOpen(false);
  }, [pathname]);

  
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 h-screen bg-[#131312] w-full">
      {/* Left Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-[#131312] p-4 overflow-y-auto transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 z-50`} // Added z-index here
      >
        <Sidebar />
        <div className="mt-5">
          <Navbar />
        </div>
        <div className="mt-5 fixed bottom-5 right-2.5">
          <SocialMediaIcons/>
        </div>
      </div>

      {/* Hamburger Menu Icon (visible on mobile) */}
      <div className="md:hidden p-1">
        <button
          onClick={toggleSidebar}
          className="block text-white focus:outline-none "
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
      <div className="md:col-span-3 lg:col-span-4 md:row-start-1 p-2 overflow-y-auto bg-white h-[98%] md:ml-[60%] lg:ml-[24%] min-w-full rounded-lg m-2 w-full sidebar" ref={contentRef}
>
        <div className="space-y-1">
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
          <WhatsAppButton 
              phoneNumber="+91-8445878532" 
              message="Hello Aman Sharma, I have a Query!"
            />
        </div>
      </div>
      <style>
        {`
          .sidebar::-webkit-scrollbar {
            width: 12px;
          }

          .sidebar::-webkit-scrollbar-track {
            background: #131312;
          }

          .sidebar::-webkit-scrollbar-thumb {
            background: #131312;
            border-radius: 10px;
          }

          .sidebar::-webkit-scrollbar-thumb:hover {
            background: #131312;
          }
        `}
      </style>
    </div>
  );
}
