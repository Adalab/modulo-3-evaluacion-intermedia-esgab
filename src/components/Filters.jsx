function Filters({handleFilterQuotes, handleFilterCharacter}) {

  const handleInput = (event) => {
    handleFilterQuotes(event.currentTarget.value);
  };

  const handleSelect = (event) => {
    handleFilterCharacter(event.currentTarget.value);
  };

  return (
    <form className="filters">
      <label htmlFor="quotesFilter">Filtrar por frase:</label>
      <input type="text" id="quotesFilter" name="quotesFilter" onInput={handleInput}/>

      <label htmlFor="characterFilter">Filtrar por personaje:</label>
      <select id="characterFilter" name="characterFilter" onInput={handleSelect}>
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

export default Filters;
