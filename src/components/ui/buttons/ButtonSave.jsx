import React from 'react';

const buttonSave = ({ buttonText }) => {
  return (
    <button 
    type="submit" 
    className="mt-2 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
>
  {buttonText}
</button>
  );
};

export default buttonSave;
