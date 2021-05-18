import React from 'react';
import PropTypes from 'prop-types';

function QuoteBlock({ quote, character, image }) {
  return (
    <figure>
      <figcaption>{character}</figcaption>
      <img src={image} alt={character} />
      <figcaption>{quote}</figcaption>
    </figure>
  );
}

QuoteBlock.propTypes = {};

export default QuoteBlock;
