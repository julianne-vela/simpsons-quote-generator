import React from 'react';
import PropTypes from 'prop-types';

const DontPushBtn = ({ onClick }) => {
  return <button onClick={onClick}>DON'T PUSH</button>;
};

DontPushBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DontPushBtn;
