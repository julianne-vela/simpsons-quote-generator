import React from 'react';
import PropTypes from 'prop-types';
import style from '../styles/QuoteBlock.css';

const QuoteBlock = ({ quote, character, image, id, hidden, onClick }) => {
  return (
    <section
      id={id}
      className={`${hidden === id ? style.hidden : style.generateQuote}`}
    >
      <figure>
        <figcaption>{character}</figcaption>

        <img src={image} alt={character} />

        <figcaption>{quote}</figcaption>
      </figure>

      <button className={style.reset} onClick={onClick}>
        New Quote
      </button>
    </section>
  );
};

QuoteBlock.propTypes = {
  character: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};

export default QuoteBlock;
