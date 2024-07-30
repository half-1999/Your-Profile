import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaYoutube, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // For internal routing

const SocialMediaIcons = () => {
  // State to manage form inputs
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    // Clear the form fields
    setEmail('');
    setMessage('');
  };

  return (
    <div className="rounded-xl">
      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 rounded-lg shadow-md">
      <div className="flex flex-col gap-1">
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-1 rounded border border-gray-300"
          placeholder="Enter your Email"
          required
        />
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-1 rounded border border-gray-300"
          placeholder="Enter your Query..."
          rows="2"
          required
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="flex items-center justify-center bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600 transition duration-300 "
        >
          <FaEnvelope className="text-center" />
        </button>
      </div>
    </form>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-3 mt-1">
        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/your-profile" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-700 hover:mt-[-10px] duration-500"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={30} />
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/half-1999" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-900 hover:text-gray-700 hover:mt-[-10px] duration-500"
          aria-label="GitHub"
        >
          <FaGithub size={30} />
        </a>

        {/* Portfolio */}
        <a 
          href="#" 
          className="text-green-500 hover:text-green-700 hover:mt-[-10px] duration-500"
          aria-label="Portfolio"
        >
          <span className="text-xl font-bold">🔗</span> {/* Placeholder for portfolio icon */}
        </a>

        {/* Instagram */}
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-pink-600 hover:text-pink-800 hover:mt-[-10px] duration-500"
          aria-label="Instagram"
        >
          <FaInstagram size={30} />
        </a>

        {/* Twitter */}
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600 hover:mt-[-10px] duration-500"
          aria-label="Twitter"
        >
          <FaTwitter size={30} />
        </a>

        {/* YouTube */}
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-red-600 hover:text-red-800 hover:mt-[-10px] duration-500"
          aria-label="YouTube"
        >
          <FaYoutube size={30} />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaIcons;
