import React from 'react';
import styled from 'styled-components';

/**
 * Exercise 4: NavLink component
 * Features:
 * 1. Turns red on hover using CSS nesting.
 * 2. Hides on mobile screens (width < 600px) using media queries.
 */

const StyledLink = styled.a`
  text-decoration: none;
  font-weight: 600;
  color: #333;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: color 0.3s ease, background-color 0.3s ease;

  /* CSS Nesting for Hover Effect */
  &:hover {
    color: #ff0000; /* Turns red on hover */
    background-color: #fff5f5;
  }

  /* Media Query to hide on screens < 600px */
  @media (max-width: 600px) {
    display: none;
  }
`;

const NavLink = ({ children, href = "#" }) => {
  return (
    <StyledLink href={href}>
      {children}
    </StyledLink>
  );
};

export default NavLink;
