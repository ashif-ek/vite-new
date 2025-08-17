import { useEffect, useState } from "react";

function Showquotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())


      .then((data) => setQuotes(data.quotes.slice(0, 10))); 
  }, []);

  return (
    <>
      {quotes.map((quote) => (
        <h1 key={quote.id}><br /> <hr />{quote.quote}</h1>
      ))}
    </>
  );
}

export default Showquotes;
