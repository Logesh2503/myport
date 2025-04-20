import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 text-center mt-12">
      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} M. Logeshkumar. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
