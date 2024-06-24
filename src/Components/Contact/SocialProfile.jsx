import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineGlobal,
  AiOutlineMail,
} from "react-icons/ai";

const SocialProfile = () => {
  return (
    <div className="bg-gray-300 p-6 rounded-2xl shadow-2xl mb-6">
      <h2 className="text-2xl font-semibold mb-4">Social Profiles</h2>
      <div className="flex space-x-4">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:text-indigo-700"
          data-tip="LinkedIn"
        >
          <AiFillLinkedin className="text-3xl" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-700"
          data-tip="GitHub"
        >
          <AiFillGithub className="text-3xl" />
        </a>

        {/* Twitter */}
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600"
          data-tip="Twitter"
        >
          <AiOutlineTwitter className="text-3xl" />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 hover:text-pink-700"
          data-tip="Instagram"
        >
          <AiFillInstagram className="text-3xl" />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900"
          data-tip="Facebook"
        >
          <AiFillFacebook className="text-3xl" />
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:text-red-700"
          data-tip="YouTube"
        >
          <AiFillYoutube className="text-3xl" />
        </a>

        {/* Personal Website */}
        <a
          href="https://www.yourwebsite.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-700"
          data-tip="Personal Website"
        >
          <AiOutlineGlobal className="text-3xl" />
        </a>

        {/* Email */}
        <a
          href="mailto:yourname@example.com"
          className="text-blue-600 hover:text-blue-800"
          data-tip="Email"
        >
          <AiOutlineMail className="text-3xl" />
        </a>
      </div>
      {/* <Tooltip effect="solid" place="top" /> */}
    </div>
  );
};

export default SocialProfile;
