import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = ({ phoneNumber, message }) => {
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button 
      onClick={handleClick} 
      className="fixed bottom-7 right-5 p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 focus:outline-none"
    >
      <FaWhatsapp className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppButton;
