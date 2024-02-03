import { useState } from 'react';

import Header from './Header';
import Filters from './Filters';
import QuotesList from './QuotesList';

import '../scss/App.scss';

import dataQuotes from "../data/quotes.json";

function App() {
  const [quotes] = useState(dataQuotes)
  const [filterQuotes, setFilterQuotes] = useState('');
  const [filterCharacter, setFilterCharacter] = useState('');

  const handleFilterQuotes = (filterValue) => {
    setFilterQuotes(filterValue);
  };

  const handleFilterCharacter = (filterValue) => {
    setFilterCharacter(filterValue);
  };

  const filteredQuotes = quotes.filter(quote => quote.quote.toLowerCase().includes(filterQuotes.toLowerCase()));

  return (
    <div className="app">
      <Header />
      <main className="quotes">
        <Filters handleFilterQuotes={handleFilterQuotes} handleFilterCharacter={handleFilterCharacter} />
        <QuotesList quotes={filteredQuotes}/>
      </main>
    </div>
  )
}

export default App;
