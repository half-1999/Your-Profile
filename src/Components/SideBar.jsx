import { FaUserCircle } from "react-icons/fa";
import image from "../assets/Pic.png";

const Sidebar = () => {
  const profilePic = image;
  return (
    <div className="flex flex-col items-center justify-center p-2">
      <img src={profilePic} className="rounded-xl w-21 h-21 mb-2" />
      {!profilePic && <FaUserCircle className="w-20 h-20 text-gray-500" />}
      <div className="flex items-center space-x-4">
        <div className="text-center">
          <p className="font-bold text-white text-3xl">Aman Sharma</p>
          <p className="text-md font-semibold text-white mb-2">
            Full-Stack Developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
