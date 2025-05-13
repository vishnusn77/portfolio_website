import React from 'react';

const Button = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`text-sm px-4 py-2 rounded-md bg-white/10 text-gray-300 border border-white/10 hover:bg-white/20 transition-all duration-200 backdrop-blur-sm ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
