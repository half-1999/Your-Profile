import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  AiFillHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiOutlineFileText,
  AiOutlineMail,
} from "react-icons/ai"; // Importing icons from react-icons/ai
import LoginForm from "../pages/LoginForm"; // Import the LoginForm component

const Navbar = () => {
  const location = useLocation();
  const history = useNavigate();

  const [activeTab, setActiveTab] = useState(location.pathname);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedInStatus);
  }, []);

  const handleSetActiveTab = (path) => {
    setActiveTab(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    history("/");
  };

  const handleLogin = () => {
    // Simulate login with dummy credentials
    // Replace with actual authentication logic
    const username = "admin";
    const password = "password";

    if (username === "admin" && password === "password") {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      setShowLoginForm(false);
      history("/admin");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  // Navigation links data
  const navLinks = [
    { to: "/", text: "HOME", icon: AiFillHome, color: "text-blue-500" },
    {
      to: "/about",
      text: "ABOUT",
      icon: AiOutlineUser,
      color: "text-green-500",
    },
    {
      to: "/projects",
      text: "PROJECTS",
      icon: AiOutlineFundProjectionScreen,
      color: "text-purple-500",
    },
    // {
    //   to: "/work-experience",
    //   text: "WORK EXPERIENCE",
    //   icon: AiOutlineFileText,
    //   color: "text-red-500",
    // },
    {
      to: "/blog",
      text: "BLOG",
      icon: AiOutlineFileText,
      color: "text-yellow-500",
    },
    // {
    //   to: "/contact",
    //   text: "CONTACT",
    //   icon: AiOutlineMail,
    //   color: "text-indigo-500",
    // },
  ];

  const adminLink = (
    <Link
      to="/admin"
      className={`flex items-center p-2 rounded-md hover:bg-gradient-to-t from-white to-black ${
        activeTab === "/admin" ? "bg-gray-400 font-bold" : "bg-gray-300"
      }`}
      onClick={() => handleSetActiveTab("/admin")}
    >
      <AiOutlineMail className="mr-2 text-indigo-500" />
      ADMIN
    </Link>
  );

  // Function to determine if login button should be shown
  const shouldShowLoginButton = () => {
    // Only show login button for the /admin route if not logged in
    return location.pathname === "/admin" && !isLoggedIn;
  };

  return (
    <div>
      <nav className="space-y-3 z-100">
        {/* Render dynamic navigation links */}
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className={`flex items-center p-2 rounded-md hover:bg-black hover:ml-5 duration-700 ${
              activeTab === link.to
                ? "bg-[#000] font-bold ml-5"
                : "bg-[#131312] font-semibold"
            }`}
            onClick={() => handleSetActiveTab(link.to)}
          >
            <link.icon className={`mr-2 ${link.color} text-xl`} />
            <span className="text-white text-sm">
                {link.text}
            </span>
          </Link>
        ))}

        {/* Conditional Admin Link based on login status */}
        {isLoggedIn && adminLink}

        {/* Login Button */}
        {shouldShowLoginButton() && (
          <button
            onClick={() => setShowLoginForm(true)}
            className="flex items-center p-2 rounded-md hover:bg-gray-400 bg-gray-300"
          >
            Login
          </button>
        )}

        {/* Logout Button */}
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="flex items-center p-2 rounded-md hover:bg-gray-400 bg-gray-300"
          >
            Logout
          </button>
        )}
      </nav>

      {/* Login Form Modal */}
      {showLoginForm && <LoginForm handleLogin={handleLogin} />}
    </div>
  );
};

export default Navbar;
