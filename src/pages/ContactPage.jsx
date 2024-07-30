import {
  FaMapMarkerAlt,
} from "react-icons/fa";
import SocialProfile from "../Components/Contact/SocialProfile";
import Form from "../Components/Contact/Form";
import { AiOutlineMail } from "react-icons/ai";


const ContactPage = () => {

  return (
    <div className="py-5 bg-gray-300 rounded-xl p-2">
      {/* Contact Form */}
        <h2 className="text-3xl font-bold mb-4 flex items-center text-[#15445a]"><AiOutlineMail className="mr-2" /> Contact Page</h2>

        {/* Social Media Links */}
        {/*<SocialProfile />*/}

        <Form />

      {/* Location */}
      <a
      href="https://www.google.com/maps?q=iThum+Tower+Noida"
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="bg-gray-200 p-6 rounded-2xl shadow-2xl mb-6 hover:bg-gray-400 cursor-pointer">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaMapMarkerAlt className="mr-2 text-[#15445a]" /> Location
        </h2>
        <p className="text-[#15445a] font-semibold ml-8">Based in Noida, India</p>
      </div>
    </a>
    </div>
  );
};

export default ContactPage;
