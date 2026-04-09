import React from 'react';

/**
 * Footer component for Exercise 3
 * Uses the --primary-color CSS variable defined in index.css
 */
const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Enterprise Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
