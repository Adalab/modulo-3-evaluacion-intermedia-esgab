import PropTypes from "prop-types";

function QuoteItem( {quote, character} ) {

  return (
    <p className="quote__quote">{quote} - <span className="quote__character">{character}</span></p>
  );
}

QuoteItem.propTypes = {
  quote: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};

export default QuoteItem;