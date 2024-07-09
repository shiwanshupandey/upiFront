import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Example icon
import './Button.css'; // Assuming you have a separate CSS file for styles

const Button = ({ children, to }) => {
    return (
      <Link to={to} className="buttonNew">
        {children}
        <FontAwesomeIcon icon={faArrowRight} className="icon-HomeIntro" />
      </Link>
    );
  };
  
  export default Button;