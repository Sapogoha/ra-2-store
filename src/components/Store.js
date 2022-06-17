import React, { useState } from 'react';

import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';

import icon from '../data/icon';
import products from '../data/products';

function Store() {
  const [activeIcon, changeIcon] = useState(icon[0]);
  const onSwitch = () => {
    changeIcon((previous) => (previous === icon[0] ? icon[1] : icon[0]));
  };
  return (
    <div className="store">
      <IconSwitch icon={activeIcon} onSwitch={onSwitch} />
      {activeIcon === icon[0] ? (
        <CardsView cards={products} />
      ) : (
        <ListView items={products} />
      )}
    </div>
  );
}

export default Store;
