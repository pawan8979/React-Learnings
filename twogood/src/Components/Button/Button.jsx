import React from 'react';
import './Button.css'; // Import your custom CSS file

export default function Button({ children }) {
  return (
    <a className="custom-button" href="">
      <span className="custom-text">
        {children}
      </span>
    </a>
  );
}
