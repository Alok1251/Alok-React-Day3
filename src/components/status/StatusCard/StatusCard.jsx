import React from 'react';
import styled from 'styled-components';

/**
 * Exercise 2: StatusCard component
 * Uses dynamic background color based on the 'type' prop using styled-components.
 */

const CardContainer = styled.div`
  padding: 1.5rem;
  border-radius: 8px;
  color: white;
  margin: 1rem 0;
  font-weight: 500;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  /* Dynamic background color logic */
  background-color: ${props => {
    switch (props.type) {
      case 'success':
        return '#28a745'; // Success green
      case 'error':
        return '#dc3545'; // Error red
      default:
        return '#6c757d'; // Default gray
    }
  }};

  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const StatusCard = ({ type, message }) => {
  return (
    <CardContainer type={type}>
      <span>{type.toUpperCase()}: </span>
      {message}
    </CardContainer>
  );
};

export default StatusCard;
