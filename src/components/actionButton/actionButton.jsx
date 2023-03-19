import React from 'react';
import './actionButton.css';

const ActionButton = ({ label, functionOnClick }) => (
  <button type='button' onClick={() => functionOnClick()} className="actionButton">  
     {label}
  </button>
);
export default ActionButton;
