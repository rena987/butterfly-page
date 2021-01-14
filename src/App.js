import React, { useState, useEffect } from 'react';
import './App.css';



function App() {

  const [quote, setQuote] = useState('');

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://quotes.rest/qod?language=en`);
      const json = await res.json();
      console.log(json);
      setQuote(json.contents.quotes[0].quote)
    }
    fetchData();
  }, [])

  return (
    <div className="app">
      <div className = "text">Butterflies</div>
      <div className = "quote">{quote}</div>
      <div className = "first"> </div>
      <div className = "label1"> Danaus Plexippus </div>
      <div className = "second"> </div>
      <div className = "label2"> Morpho Pelides </div>
      <div className = "third"> </div>
      <div className = "label3"> Delias Eucharia </div>
    </div>
  );
}

export default App;
