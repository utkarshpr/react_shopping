import React from 'react';
import CustomButton from '../button/button.component'
import './shoppage.style.scss';

const Shop = ({ id, item, price, imageUrl }) => (
  <div className="collection-item">
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="image "
    ></div>
    <div className="collection-footer">
      <span className="name">{item.toUpperCase()}</span>
      <CustomButton type="submit" > ADD TO CART</CustomButton>
      <span className="price">{price}</span>
    </div>
  </div>
);
export default Shop;
