import React from 'react';
import PropTypes from 'prop-types';
import '../../components/styles/Button.css';

const DontPushBtn = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick}>
        <label>
          DON'T<br></br>PUSH
        </label>
      </button>
    </>
  );
};

DontPushBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DontPushBtn;
