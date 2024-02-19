function Filters({handleFilterQuotes, handleFilterCharacter}) {

  const handleInputQuotes = (event) => {
    handleFilterQuotes(event.currentTarget.value);
  };

  const handleSelectCharacter = (event) => {
    handleFilterCharacter(event.currentTarget.value);
  };

  return (
    <form className="filter">
      <label className="filter__label" htmlFor="character">Filtrar por frase:
        <input className="filter__input" type="text" id="quotes" name="quotes" onInput={handleInputQuotes}/>
      </label>

      <label className="filter__label" htmlFor="character">Filtrar por personaje:
        <select className="filter__select" id="character" name="character" onInput={handleSelectCharacter}>
          <option value="all">Todos</option>
          <option value="Ross">Ross</option>
          <option value="Monica">Monica</option>
          <option value="Joey">Joey</option>
          <option value="Phoebe">Phoebe</option>
          <option value="Chandler">Chandler</option>
          <option value="Rachel">Rachel</option>
        </select>
      </label>
    </form>
  );
}

export default Filters;
