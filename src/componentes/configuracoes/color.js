import React, { useState } from 'react';

const ColorPicker = ({ onColorChange, initialColor = '#000000' }) => {
  const [color, setColor] = useState(initialColor);
  const [showPicker, setShowPicker] = useState(false);

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setColor(newColor);
    onColorChange?.(newColor);
  };

  return (
    <div className="relative">
      <div 
        className="w-10 h-10 border border-gray-300 cursor-pointer rounded"
        style={{ backgroundColor: color }}
        onClick={() => setShowPicker(!showPicker)}
      />
      
      {showPicker && (
        <div className="absolute mt-2 p-2 bg-white rounded shadow-lg border border-gray-200">
          <input
            type="color"
            value={color}
            onChange={handleColorChange}
            className="w-32 h-32 cursor-pointer"
          />
          <div className="mt-2 text-sm text-center text-gray-600">
            {color.toUpperCase()}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;