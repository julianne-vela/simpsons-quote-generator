import React from 'react';
import PropTypes from 'prop-types';

const QuoteBlock = ({ quote, character, image }) => {
  console.log(quote, character, image);
  return (
    <figure>
      <figcaption>{character}</figcaption>
      <img src={image} alt={character} />
      <figcaption>{quote}</figcaption>
    </figure>
  );
};

QuoteBlock.propTypes = {
  character: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};

export default QuoteBlock;
