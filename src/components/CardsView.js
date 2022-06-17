import React from 'react';
import PropTypes from 'prop-types';
import ShopCard from './ShopCard';

function CardsView(props) {
  const { cards } = props;
  return (
    <div className="cards-view">
      {cards.map((card) => (
        <ShopCard card={card} key={Math.random()} />
      ))}
    </div>
  );
}

CardsView.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default CardsView;
