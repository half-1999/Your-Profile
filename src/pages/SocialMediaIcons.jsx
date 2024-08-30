import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaYoutube, FaEnvelope } from 'react-icons/fa';

const SocialMediaIcons = () => {
  // State to manage form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState(''); // State to manage API response

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // API URL
    const apiUrl = 'https://your-profile-server.vercel.app/api/contact/submit'; 

    // Data to be sent to the API
    const formData = {
      name,
      email,
      message,
    };

    try {
      // POST request to the API
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if the request was successful
      if (response.ok) {
        const data = await response.json();
        setResponseMessage('Your message has been sent successfully!');
        // Clear the response message after 2 seconds
        setTimeout(() => {
          setResponseMessage('');
        }, 2000);
        console.log('Success:', data);
      } else {
        setResponseMessage('There was an issue sending your message.');
        // Clear the response message after 2 seconds
        setTimeout(() => {
          setResponseMessage('');
        }, 2000);
        console.log('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('There was an issue sending your message.');
    }

    // Clear the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="rounded-xl">
      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 rounded-lg shadow-md">
        <div className="flex flex-col gap-1">
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-1 rounded border border-gray-300"
            placeholder="Enter your Name"
            required
          />
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
            placeholder="Enter your Query / Feedback ..."
            rows="2"
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center justify-center bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600 transition duration-300"
          >
            <FaEnvelope className="text-center" />
          </button>
        </div>
      </form>

      {/* Display response message */}
      {responseMessage && <p className="text-center mt-2 text-white text-sm">{responseMessage}</p>}

      {/* Social Media Links */}
      <div className="flex justify-center space-x-3 mt-1">
        <a href="https://www.linkedin.com/in/developer-aman-sharma" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:mt-[-10px] duration-500" aria-label="LinkedIn">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/half-1999" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 hover:mt-[-10px] duration-500" aria-label="GitHub">
          <FaGithub size={30} />
        </a>
        <a href="https://developer-aman-sharma.vercel.app" target='_blank' className="text-green-500 hover:text-green-700 hover:mt-[-10px] duration-500" aria-label="Portfolio">
          <span className="text-xl font-bold">🔗</span>
        </a>
        <a href="https://instagram.com/half-engiiineeer" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 hover:mt-[-10px] duration-500" aria-label="Instagram">
          <FaInstagram size={30} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 hover:mt-[-10px] duration-500" aria-label="Twitter">
          <FaTwitter size={30} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 hover:mt-[-10px] duration-500" aria-label="YouTube">
          <FaYoutube size={30} />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaIcons;
