// frontend/src/pages/BlogPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaCalendarAlt, FaTags } from "react-icons/fa";

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Understanding React Hooks",
      author: "Aman Sharma",
      date: "June 15, 2023",
      description:
        "A comprehensive guide to understanding and using React hooks in your projects.",
      tags: ["React", "JavaScript", "Web Development"],
    },
    {
      id: 2,
      title: "Building a REST API with Node.js",
      author: "Aman Sharma",
      date: "May 10, 2023",
      description:
        "Learn how to build a scalable REST API using Node.js, Express, and MongoDB.",
      tags: ["Node.js", "API", "Backend Development"],
    },
    {
      id: 3,
      title: "CSS Grid vs. Flexbox",
      author: "Aman Sharma",
      date: "April 20, 2023",
      description:
        "An in-depth comparison of CSS Grid and Flexbox for modern web layout design.",
      tags: ["CSS", "Web Design", "Frontend Development"],
    },
    // Add more blog entries as needed
  ];

  return (
    <div className="py-5">
      <div className="bg-white p-6 rounded-2xl shadow-2xl mb-6">
        <h2 className="text-2xl font-semibold mb-4">Blog</h2>
        <p className="text-gray-700">
          Welcome to my blog! Here you'll find articles on various topics
          related to web development, software engineering, and more.
        </p>
      </div>

      <div className="space-y-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-gray-300 p-6 rounded-2xl shadow-2xl">
            <h3 className="text-xl font-semibold mb-2">
              <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
            </h3>
            <div className="flex items-center space-x-4 mb-4 text-gray-500">
              <span className="flex items-center">
                <FaUser className="mr-1" /> {blog.author}
              </span>
              <span className="flex items-center">
                <FaCalendarAlt className="mr-1" /> {blog.date}
              </span>
              <span className="flex items-center">
                <FaTags className="mr-1" /> {blog.tags.join(", ")}
              </span>
            </div>
            <p className="text-gray-700">{blog.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-md shadow-md mt-6">
        <p className="text-gray-700">
          Thank you for reading my blog. Feel free to share your thoughts and
          feedback in the comments section below each post.
        </p>
      </div>
    </div>
  );
};

export default BlogPage;
