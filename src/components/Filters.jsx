import PropTypes from "prop-types";

function Filters({ handleFilterQuotes, filterQuotes, filterCharacter }) {

  const handleInputQuotes = (event) => {
    handleFilterQuotes('quote', event.currentTarget.value);
  };

  const handleInputCharacter = (event) => {
    handleFilterQuotes('character', event.currentTarget.value);
  };

  return (
    <form className="filter">
      <label className="filter__label" htmlFor="quotes">Filtrar por frase: </label>
      <input
        className="filter__input"
        type="text"
        id="quotes"
        name="quotes"
        value={filterQuotes}
        onInput={handleInputQuotes}
      />
      
      <label className="filter__label" htmlFor="character">Filtrar por personaje:</label>
        <select
          className="filter__select"
          id="character"
          name="character"
          value={filterCharacter}
          onInput={handleInputCharacter}
        >
          <option value="all">Todos</option>
          <option value="Ross">Ross</option>
          <option value="Monica">Monica</option>
          <option value="Joey">Joey</option>
          <option value="Phoebe">Phoebe</option>
          <option value="Chandler">Chandler</option>
          <option value="Rachel">Rachel</option>
        </select>
    </form>
  );
}

Filters.propTypes = {
  handleFilterQuotes: PropTypes.func.isRequired,
  newQuote: PropTypes.string.isRequired,
};

Filters.propTypes = {
  handleFilterQuotes: PropTypes.func.isRequired,
  filterQuotes: PropTypes.string.isRequired,
  filterCharacter: PropTypes.string.isRequired,
};


export default Filters;
