import React from 'react';

const MenuIcon = ({fillColor}) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="5" width="24" height="3" fill={fillColor} />
    <rect y="11" width="24" height="3" fill={fillColor} />
    <rect y="17" width="24" height="3" fill={fillColor} />
  </svg>
);

export default MenuIcon;
