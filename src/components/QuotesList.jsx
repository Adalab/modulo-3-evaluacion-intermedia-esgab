import PropTypes from 'prop-types';

import QuoteItem from "./QuoteItem";

function QuotesList({ quotes }) {

  const htmlQuotes = quotes.map((quote, idx)  => (
    <li key={idx} className="quotes__item">
      <QuoteItem
        quote={quote.quote}
        character={quote.character}
      />
    </li>
  ));

  return (
    <ul className="quotes__list">
      {htmlQuotes}
    </ul>
  );
}

QuotesList.propTypes = {
  quotes: PropTypes.array
}

export default QuotesList;

