import React from 'react';
import './left.style.scss';
const Left = ({ item, imageUrl }) => (
  <div style={{ backgroundImage: `url(${imageUrl})` }} className="left ">
    <div className="text">
      <h1>{item.toUpperCase()}</h1>
    </div>
  </div>
);
export default Left;
