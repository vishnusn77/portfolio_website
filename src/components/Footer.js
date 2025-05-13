import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full text-center text-sm text-white/50 absolute bottom-4 left-0 px-4">
      © {new Date().getFullYear()} Vishnu Nair. All rights reserved.
    </footer>
  );
};

export default Footer;
