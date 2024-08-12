// frontend/src/pages/BlogPage.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaCalendarAlt, FaTags } from "react-icons/fa";
import { AiOutlineFileText } from "react-icons/ai";

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Understanding React Hooks",
      author: "Aman Sharma",
      date: "July 15, 2024",
      description:
        "Dive into the world of React Hooks with this comprehensive guide. React Hooks, introduced in React 16.8, allow developers to use state and lifecycle features in functional components, which was previously only possible in class components. This blog post covers the core hooks such as useState, useEffect, useContext, and useReducer, explaining how they work and how to use them effectively. It also explores the rules of hooks and the concept of custom hooks, providing practical examples and best practices to enhance your React development skills. Whether you're new to hooks or looking to deepen your understanding, this guide will help you leverage hooks to write cleaner, more maintainable code.",
      tags: ["React", "JavaScript", "Web Development"],
      image:'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210714205336/Things-You-Should-Know-About-React-Hooks.png'
    },
    {
      id: 2,
      title: "Building a REST API with Node.js",
      author: "Aman Sharma",
      date: "May 10, 2023",
      description:
        "Learn how to build a scalable and efficient REST API using Node.js, Express, and MongoDB in this detailed tutorial. This blog post walks you through the process of setting up a Node.js server, designing RESTful endpoints, and connecting to a MongoDB database. You’ll gain hands-on experience with Express.js middleware, route handling, and CRUD operations. The guide also covers best practices for API design, including error handling, data validation, and securing your API. Ideal for backend developers and those looking to enhance their server-side skills, this post provides practical insights and code samples to help you create robust APIs for your applications.",
      tags: ["Node.js", "API", "Backend Development"],
      image:'https://nordicapis.com/wp-content/uploads/Building-a-RESTful-API-Using-Node.JS-and-MongoDB.png'

    },
    {
      id: 3,
      title: "CSS Grid vs. Flexbox",
      author: "Aman Sharma",
      date: "April 20, 2023",
      description:
        "Explore the differences and use cases of CSS Grid and Flexbox in this in-depth comparison. CSS Grid and Flexbox are two powerful layout systems in CSS, each designed to solve different types of layout problems. This blog post examines the key features and capabilities of both Grid and Flexbox, highlighting their strengths and weaknesses through practical examples. You’ll learn when to use each system based on the layout requirements of your project, and how to combine them effectively for complex designs. Perfect for frontend developers and designers, this guide provides a clear understanding of CSS layout techniques to help you create responsive and visually appealing web pages.",
      tags: ["CSS", "Web Design", "Frontend Development"],
      image:'https://media.licdn.com/dms/image/D5612AQE_es4z5pMIZA/article-cover_image-shrink_720_1280/0/1714892538827?e=2147483647&v=beta&t=Nm6dRaGU6BUijMDQf25d3d7sY0sZUxbLyplKeZ3OjK4'

    },
    // Add more blog entries as needed
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="">
      <div className="p-3 rounded-2xl shadow-2xl mb-6">
      <h2 className="text-3xl font-bold mb-4 flex items-center text-[#15445a]">
        <AiOutlineFileText className="mr-2" /> Blog Page
      </h2>
        <p className="text-[#000] font-bold">
          Welcome to my blog! Here you'll find articles on various topics
          related to web development, software engineering, and more.
        </p>
        <div className="space-y-6 mt-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-gray-200 hover:bg-[#131312] hover:text-blue-600 font-bold  rounded-2xl p-2 cursor-pointer hover:scale-95 duration-700 shadow-2xl">
            <Link to={`/blog/${blog.id}`}>
            <img
                  src={blog.image}
                  alt={`${blog.title}`}
                  className="w-full bg-contain bg-no-repeat h-[400px] rounded-lg"
                />
              <h3 className="text-xl font-bold mb-2">
                {blog.title}
              </h3>
              <div className="flex items-center space-x-4 mb-4">
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
              <p className="">{blog.description}</p>
              </Link>
            </div>
          ))}
        </div>
        <div className="bg-gray-200 p-6 rounded-md shadow-md mt-6">
          <p className="text-black font-bold">
            Thank you for reading my blog. Feel free to share your thoughts and
            feedback in the comments section below each post.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
