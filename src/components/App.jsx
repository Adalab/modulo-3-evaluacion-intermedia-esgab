import { useState } from 'react';

import Header from './Header';
import Filters from './Filters';
import QuotesList from './QuotesList';

import '../scss/App.scss';

import dataQuotes from "../data/quotes.json";

function App() {
  const [quotes] = useState(dataQuotes)

  const [filterQuotes, setFilterQuotes] = useState('');
  const [filterCharacter, setFilterCharacter] = useState('all');

  const handleFilterQuotes = (filterName, value) => {

    if( filterName === 'quote' ) {
      setFilterQuotes(value);
    }
    else if( filterName === 'character' ) {
      setFilterCharacter(value);
    }
  };

  const filteredQuotes = quotes
    .filter((quote) => quote.quote.includes(filterQuotes))
    .filter((quote) => {
      if (filterCharacter === "all") {
        return true;
      } else {
        return quote.character === filterCharacter;
      }
    });

  return (
    <div className="app">
      <Header />
      <main className="quotes">
        <Filters handleFilterQuotes={handleFilterQuotes}  />
        <QuotesList quotes={filteredQuotes} />
      </main>
    </div>
  )
}

export default App;
