import React from 'react';
import PropTypes from 'prop-types';

function IconSwitch(props) {
  const { icon, onSwitch } = props;
  return (
    <div className="icon">
      <button className="material-icons" onClick={onSwitch}>
        {icon}
      </button>
    </div>
  );
}

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
};

export default IconSwitch;
