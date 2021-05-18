const fetchQuote = async () => {
  const res = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
  const json = await res.json();

  return {
    quote: json[0].quote,
    character: json[0].character,
    image: json[0].image,
  };
};

export default fetchQuote;
