import React, { useState } from 'react';
import DontPushBtn from '../components/displays/DontPushBtn';
import Loading from '../components/displays/Loading';
import QuoteBlock from '../components/displays/QuoteBlock';
import fetchQuote from '../services/apiUtils';
import style from '../components/styles/Main.css';

const SimpsonsQuotes = () => {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);
  const [hiddenId, setHiddenId] = useState('quoteBlock');

  const handleClick = async () => {
    setLoading(true);
    setHiddenId('generateBtn');
    const quote = await fetchQuote();
    setQuote(quote);
    setLoading(false);
  };

  return (
    <main className={style.mainContainer}>
      <DontPushBtn id="generateBtn" onClick={handleClick} hidden={hiddenId} />
      {loading ? (
        <Loading />
      ) : (
        <QuoteBlock
          id="quoteBlock"
          onClick={handleClick}
          hidden={hiddenId}
          {...quote}
        />
      )}
    </main>
  );
};

export default SimpsonsQuotes;
