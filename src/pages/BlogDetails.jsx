// frontend/src/pages/BlogDetailPage.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaUser, FaCalendarAlt, FaTags, FaComments } from "react-icons/fa";

// Sample blog data for demonstration. In a real app, you would fetch this from a server.
const blogData = [
  {
    id: 1,
    title: "Understanding React Hooks",
    author: "Aman Sharma",
    date: "June 15, 2023",
    content: "Detailed content for Understanding React Hooks...",
    tags: ["React", "JavaScript", "Web Development"],
    image: "https://via.placeholder.com/800x400", // Placeholder image URL
  },
  {
    id: 2,
    title: "Building a REST API with Node.js",
    author: "Aman Sharma",
    date: "May 10, 2023",
    content: "Detailed content for Building a REST API with Node.js...",
    tags: ["Node.js", "API", "Backend Development"],
    image: "https://via.placeholder.com/800x400", // Placeholder image URL
  },
  {
    id: 3,
    title: "CSS Grid vs. Flexbox",
    author: "Aman Sharma",
    date: "April 20, 2023",
    content: "Detailed content for CSS Grid vs. Flexbox...",
    tags: ["CSS", "Web Design", "Frontend Development"],
    image: "https://via.placeholder.com/800x400", // Placeholder image URL
  },
  // Add more blog entries as needed
];

const BlogDetailPage = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="py-5">
      <div className="bg-white p-6 rounded-md shadow-md mb-6">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-auto rounded-md mb-4"
        />
        <h2 className="text-3xl font-semibold mb-4">{blog.title}</h2>
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
        <div className="text-gray-700 leading-relaxed">{blog.content}</div>
      </div>

      {/* Related Posts */}
      <div className="bg-white p-6 rounded-md shadow-md mb-6">
        <h3 className="text-2xl font-semibold mb-4">Related Posts</h3>
        <div className="space-y-4">
          {blogData
            .filter((b) => b.id !== blog.id)
            .map((relatedBlog) => (
              <div key={relatedBlog.id} className="flex items-center space-x-4">
                <img
                  src={relatedBlog.image}
                  alt={relatedBlog.title}
                  className="w-24 h-24 rounded-md object-cover"
                />
                <div>
                  <h4 className="text-xl font-semibold">
                    <Link to={`/blog/${relatedBlog.id}`}>
                      {relatedBlog.title}
                    </Link>
                  </h4>
                  <p className="text-gray-500">{relatedBlog.date}</p>
                  <p className="text-gray-700">
                    {relatedBlog.content.substring(0, 100)}...
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Comments Section */}
      <div className="bg-white p-6 rounded-md shadow-md mb-6">
        <h3 className="text-2xl font-semibold mb-4">Comments</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <FaComments className="text-gray-500" />
            <div>
              <h4 className="text-lg font-semibold">User1</h4>
              <p className="text-gray-700">
                Great article! Very informative and well written.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FaComments className="text-gray-500" />
            <div>
              <h4 className="text-lg font-semibold">User2</h4>
              <p className="text-gray-700">
                I learned a lot from this post. Thanks for sharing!
              </p>
            </div>
          </div>
          {/* Add more comments as needed */}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
