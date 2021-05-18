import React from 'react';
import PropTypes from 'prop-types';
import style from '../../components/styles/Button.css';

const DontPushBtn = ({ onClick, id, hidden }) => {
  return (
    <>
      <button
        id={id}
        name="generateBtn"
        className={`${hidden === id ? style.hidden : style.generateQuote}`}
        onClick={onClick}
      >
        <label id="btnText" className={style.generateQuote}>
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
