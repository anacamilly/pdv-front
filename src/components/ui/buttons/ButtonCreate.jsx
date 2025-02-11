import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const ButtonCreate = ({ buttonText, href }) => {
  return (
    <a 
      href={href} 
      className="bg-green-600 text-white px-4 py-2 rounded mb-4 inline-block"
      aria-label="Create a new product"
    >
      <FontAwesomeIcon icon={faPlusCircle} className="text-lg mr-2" />
      {buttonText} 
    </a>
  );
};

export default ButtonCreate;
