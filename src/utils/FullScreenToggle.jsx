import { useState } from 'react';
import { FaExpand, FaCompress } from 'react-icons/fa';
import './FullScreenToggle.css';

const FullScreenButton = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const enterFullScreen = () => {
    const element = document.documentElement;

    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari and Opera
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE/Edge
      element.msRequestFullscreen();
    }

    setIsFullScreen(true);
  };

  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
      document.msExitFullscreen();
    }

    setIsFullScreen(false);
  };

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      enterFullScreen();
    } else {
      exitFullScreen();
    }
  };

  return (
    <button onClick={toggleFullScreen} className="fullscreen-button hidden lg:flex">
      {isFullScreen ? <FaCompress size={20}/> : <FaExpand size={20}/>}
    </button>
  );
};

export default FullScreenButton;
