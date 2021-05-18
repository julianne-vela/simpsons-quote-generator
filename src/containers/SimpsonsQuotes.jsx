import React, { useState } from 'react';
import DontPushBtn from '../components/displays/DontPushBtn';
import Loading from '../components/displays/Loading';
import QuoteBlock from '../components/displays/QuoteBlock';
import fetchQuote from '../services/apiUtils';
import style from '../components/styles/Main.css';

const SimpsonsQuotes = () => {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const quote = await fetchQuote();
    setQuote(quote);
    setLoading(false);
  };

  return (
    <main className={style.mainContainer}>
      <DontPushBtn onClick={handleClick} />
      {loading ? <Loading /> : <QuoteBlock {...quote} />}
    </main>
  );
};

export default SimpsonsQuotes;
