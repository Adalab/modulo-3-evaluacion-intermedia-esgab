import { useState } from 'react';

import Header from './Header'
import QuotesList from './QuotesList';

import '../scss/App.scss';

import dataQuotes from "../data/quotes.json";

function App() {
  const [quotes] = useState(dataQuotes);

  return (
    <div className="app">
      <Header />
      <main className="quotes">
        <QuotesList quotes={quotes}  />
      </main>
    </div>
  )
}

export default App
