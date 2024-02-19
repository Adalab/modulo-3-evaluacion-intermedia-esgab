import { useState } from "react";

import Header from "./Header";
import Filters from "./Filters";
import QuotesList from "./QuotesList";
import NewQuote from "./NewQuote";

import "../scss/App.scss";

import dataQuotes from "../data/quotes.json";

function App() {
  const [quotes, setQuotes] = useState(dataQuotes);

  const [filterQuotes, setFilterQuotes] = useState("");
  const [filterCharacter, setFilterCharacter] = useState("all");

  const [newQuote, setNewQuote] = useState("");
  const [newCharacter, setNewCharacter] = useState("");

  const handleFilterQuotes = (filterName, value) => {
    if (filterName === "quote") {
      setFilterQuotes(value);
    } else if (filterName === "character") {
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

  const handleClickAdd = () => {
    if (newQuote !== "" && newCharacter !== "") {
      const newQuotes = {
        quote: newQuote,
        character: newCharacter,
      };
      setQuotes([...quotes, newQuotes]);

      setNewQuote("");
      setNewCharacter("");
    }
  };

  return (
    <div className="app">
      <Header />
      <main className="quotes">
        <Filters
          handleFilterQuotes={handleFilterQuotes}
          filterQuotes={filterQuotes}
          filterCharacter={filterCharacter}
        />
        <QuotesList quotes={filteredQuotes} />
        <NewQuote
          handleClickAdd={handleClickAdd}
          newQuote={newQuote}
          setNewQuote={setNewQuote}
          newCharacter={newCharacter}
          setNewCharacter={setNewCharacter}
        />
      </main>
    </div>
  );
}

export default App;
