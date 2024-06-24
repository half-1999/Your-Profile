// frontend/src/pages/ContactPage.jsx

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
} from "react-icons/ai"; // Importing icons from react-icons/ai
import {
  FaUser,
  FaEnvelope,
  FaBook,
  FaCommentDots,
  FaMapMarkerAlt,
} from "react-icons/fa";
import SocialProfile from "../Components/Contact/SocialProfile";
import Form from "../Components/Contact/Form";

const ContactPage = () => {
  return (
    <div className="py-5">
      {/* Contact Form */}
      <Form />

      {/* Social Media Links */}
      <SocialProfile />

      {/* Location */}
      <div className="bg-white p-6 rounded-2xl shadow-2xl mb-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaMapMarkerAlt className="mr-2" /> Location
        </h2>
        <p className="text-gray-700">Based in Noida, India</p>
      </div>
    </div>
  );
};

export default ContactPage;
