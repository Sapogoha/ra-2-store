import React from 'react';
import PropTypes from 'prop-types';

function ShopCard(props) {
  const { card } = props;
  return (
    <div className="card">
      <h3 className="card-header"> {card.name}</h3>
      <h4 className="card-color"> {card.color}</h4>
      <img
        className="card-image"
        src={card.img}
        alt={card.name + card.color + ' picture'}
      ></img>
      <div className="card-footer">
        <div className="card-price">${card.price} </div>
        <button className="card-add-button">Add to cart </button>
      </div>
    </div>
  );
}

ShopCard.propTypes = {
  card: PropTypes.object.isRequired,
};

export default ShopCard;
