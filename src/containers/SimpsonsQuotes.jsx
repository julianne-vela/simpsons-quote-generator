import React, { useState } from 'react';
import DontPushBtn from '../components/displays/DontPushBtn';
import QuoteBlock from '../components/displays/QuoteBlock';
import fetchQuote from '../services/apiUtils';

const SimpsonsQuotes = () => {
  const [quote, setQuote] = useState({});

  const handleClick = async () => {
    const quote = await fetchQuote();
    console.log(quote);
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
