import React, { useState } from 'react';
import QuoteBlock from '../components/displays/QuoteBlock';
import DontPushBtn from '../components/displays/DontPushBtn';
import fetchQuote from '../services/apiUtils';

const SimpsonsQuotes = () => {
  const [quote, setQuote] = useState();

  const handleClick = async () => {
    const quote = await fetchQuote();
    setQuote(quote);
  };

  return (
    <>
      <DontPushBtn onClick={handleClick} />
      <QuoteBlock {...quote} />
    </>
  );
};

export default SimpsonsQuotes;
