import React from 'react';
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition" {...props}>
      {children}
    </button>
  );
};

export default Button;
