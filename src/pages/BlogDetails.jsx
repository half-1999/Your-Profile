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
    date: "June 15, 2024",
    content: `
      <h2>Introduction to React Hooks</h2>
      <p>React Hooks are a powerful feature introduced in React 16.8 that allow you to use state and other React features in functional components.</p>
      
      <h3>1. Using \`useState\`</h3>
      <pre><code>
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
      </code></pre>
      <p>\`useState\` initializes state with a default value (0 in this case) and provides a function to update it.</p>
      
      <h3>2. Using \`useEffect\`</h3>
      <pre><code>
import React, { useEffect, useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // Empty array means this effect runs once after the initial render

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
      </code></pre>
      <p>\`useEffect\` is used for side effects such as data fetching. The empty dependency array means it only runs after the component mounts.</p>
      
      <h3>3. Using \`useContext\`</h3>
      <pre><code>
import React, { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

function ThemedComponent() {
  const theme = useContext(ThemeContext);

  return <div>The current theme is {theme}</div>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedComponent />
    </ThemeContext.Provider>
  );
}
      </code></pre>
      <p>\`useContext\` allows you to access the context value without using \`Context.Consumer\`.</p>
      
      <h3>4. Using \`useReducer\`</h3>
      <pre><code>
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}
      </code></pre>
      <p>\`useReducer\` is useful for managing complex state logic with actions and reducers.</p>
      
      <h3>5. Custom Hooks</h3>
      <pre><code>
import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
}

function WindowWidthComponent() {
  const width = useWindowWidth();

  return <div>Window width is {width}px</div>;
}
      </code></pre>
      <p>Custom Hooks allow you to extract and reuse logic across components.</p>
    `,
    tags: ["React", "JavaScript", "Web Development"],
    image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210714205336/Things-You-Should-Know-About-React-Hooks.png", // Placeholder image URL
  },
  {
    id: 2,
    title: "Building a REST API with Node.js",
    author: "Aman Sharma",
    date: "May 10, 2024",
    content: `
      <h2>Setting Up the Project</h2>
      <pre><code>
mkdir my-api
cd my-api
npm init -y
npm install express mongoose
      </code></pre>
      <p>Initialize a new Node.js project and install Express and Mongoose.</p>
      
      <h2>Creating the Server</h2>
      <pre><code>
const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(\`Server running on http://localhost:5000\`);
});
      </code></pre>
      <p>Set up a basic Express server.</p>
      
      <h2>Connecting to MongoDB</h2>
      <pre><code>
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

const PostSchema = new mongoose.Schema({
  title: String,
  content: String
});

const Post = mongoose.model('Post', PostSchema);
      </code></pre>
      <p>Use Mongoose to connect to MongoDB and define a schema.</p>
      
      <h2>Creating RESTful Routes</h2>
      <pre><code>
app.post('/posts', async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.send(post);
});

app.get('/posts', async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
});
      </code></pre>
      <p>Define routes for creating and fetching posts.</p>
      
      <h2>Error Handling and Validation</h2>
      <pre><code>
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
      </code></pre>
      <p>Implement error handling and data validation.</p>
    `,
    tags: ["Node.js", "ExpressJS", "API", "MongoDB", "Backend Development"],
    image: "https://nordicapis.com/wp-content/uploads/Building-a-RESTful-API-Using-Node.JS-and-MongoDB.png", // Placeholder image URL
  },
  {
    id: 3,
    title: "CSS Grid vs. Flexbox",
    author: "Aman Sharma",
    date: "April 20, 2024",
    content: `
      <h2>Introduction to CSS Layouts</h2>
      <p>Compare CSS Grid and Flexbox, two powerful layout systems in CSS.</p>
      
      <h2>CSS Grid Basics</h2>
      <pre><code>
<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  .grid-item {
    background-color: lightgray;
    padding: 20px;
    text-align: center;
  }
</style>
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
</div>
      </code></pre>
      <p>Use CSS Grid for creating grid layouts.</p>
      
      <h2>Flexbox Basics</h2>
      <pre><code>
<style>
  .flex-container {
    display: flex;
    justify-content: space-between;
  }
  .flex-item {
    background-color: lightblue;
    padding: 20px;
    text-align: center;
    width: 30%;
  }
</style>
<div class="flex-container">
  <div class="flex-item">1</div>
  <div class="flex-item">2</div>
  <div class="flex-item">3</div>
</div>
      </code></pre>
      <p>Use Flexbox for flexible layouts.</p>
      
      <h2>Comparing Layouts</h2>
      <p>Discuss the pros and cons of CSS Grid and Flexbox, and show how they can be combined for complex layouts.</p>
      
      <h2>Practical Example</h2>
      <pre><code>
<style>
  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgreen;
    height: 100px;
  }
</style>
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
</div>
      </code></pre>
      <p>Combine Grid and Flexbox for advanced layouts.</p>
    `,
    tags: ["CSS", "Web Design", "Frontend Development"],
    image: "https://media.licdn.com/dms/image/D5612AQE_es4z5pMIZA/article-cover_image-shrink_720_1280/0/1714892538827?e=2147483647&v=beta&t=Nm6dRaGU6BUijMDQf25d3d7sY0sZUxbLyplKeZ3OjK4", // Placeholder image URL
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
    <div className="">
      <div className=" rounded-md shadow-md mb-6">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[500px] rounded-md mb-4 object-fit"
        />
        <h2 className="text-xl font-semibold mb-4">{blog.title}</h2>
        <div className="mb-4 text-black grid grid-cols-1">
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
        <div
          className="text-black leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>

      {/* Related Posts */}
      <div className="bg-white p-6 rounded-md shadow-md mb-6">
        <h3 className="text-2xl font-semibold mb-4">Related Blogs</h3>
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
                  <p className="text-black">{relatedBlog.date}</p>
                  <p className="text-black">
                    {relatedBlog.content.substring(0, 100)}...
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Comments Section */}
      
    </div>
  );
};

export default BlogDetailPage;
