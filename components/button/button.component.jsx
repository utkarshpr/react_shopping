import React from 'react';
import './button.style.scss';
const CustomButton = ({ children, isGoogleSignIn, ...otherprops }) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''}custom-button`}
    {...otherprops}
  >
    {children}
  </button>
);
export default CustomButton;
