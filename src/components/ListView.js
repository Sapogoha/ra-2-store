import React from 'react';
import PropTypes from 'prop-types';
import ShopItem from './ShopItem';

function ListView(props) {
  const { items } = props;

  return (
    <div className="list-view">
      {items.map((item) => (
        <ShopItem item={item} key={Math.random()} />
      ))}
    </div>
  );
}

ListView.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ListView;
