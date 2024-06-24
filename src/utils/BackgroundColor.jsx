// BackgroundColor.js
import { useState } from 'react';

const BackgroundColor = ({ onColorChange }) => {
  const [color, setColor] = useState('#ffffff'); // Default color

  const handleChange = (e) => {
    const newColor = e.target.value;
    setColor(newColor);
    onColorChange(newColor); // Notify parent component
  };

  return (
    <input
      type="color"
      value={color}
      onChange={handleChange}
      className="ml-2"
    />
  );
};

export default BackgroundColor;
