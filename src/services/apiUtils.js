const fetchQuote = async () => {
  const quoteObject = await fetch(
    'https://thesimpsonsquoteapi.glitch.me/quotes'
  );

  return quoteObject.json();
};

export default fetchQuote;
