import React from "react";
import { FaUser, FaEnvelope, FaBook, FaCommentDots } from "react-icons/fa";
const Form = () => {
  return (
    <div className="bg-gray-200 p-6 rounded-2xl shadow-2xl mb-6">
      <h2 className="text-2xl font-bold mb-4 text-[#15445a]">Connect With Me</h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-md font-medium text-gray-700 flex items-center"
          >
            <FaUser className="mr-2" /> Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-md"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-md font-medium text-gray-700 flex items-center"
          >
            <FaEnvelope className="mr-2" /> Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-md"
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-md font-medium text-gray-700 flex items-center"
          >
            <FaBook className="mr-2" /> Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-md"
            placeholder="Enter the subject of your message"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-md font-medium text-gray-700 flex items-center"
          >
            <FaCommentDots className="mr-2" /> Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-md"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="inline-flex justify-center items-center w-full px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#03A9F4] hover:bg-[#3fc2ff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#03A9F4]"
        >
          Send Your Query
        </button>
      </form>
    </div>
  );
};

export default Form;
