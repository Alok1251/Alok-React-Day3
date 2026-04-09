import React from 'react';

/**
 * Exercise 1: Button component
 * Uses the .btn class defined in index.css for styling.
 */
const Button = ({ children, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
