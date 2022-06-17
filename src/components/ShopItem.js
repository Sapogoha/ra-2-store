import React from 'react';
import PropTypes from 'prop-types';

function ShopItem(props) {
  const { item } = props;
  return (
    <div className="item">
      <img
        className="item-image"
        src={item.img}
        alt={item.name + item.color + ' picture'}
      ></img>
      <h3 className="item-header"> {item.name}</h3>
      <h4 className="item-color"> {item.color}</h4>
      <div className="item-price">${item.price} </div>
      <button className="item-add-button">Add to cart </button>
    </div>
  );
}

ShopItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ShopItem;
