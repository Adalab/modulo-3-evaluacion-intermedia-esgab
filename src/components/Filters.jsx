function Filters({handleFilterQuotes, handleFilterCharacter}) {

  const handleInput = (event) => {
    handleFilterQuotes(event.currentTarget.value);
  };

  const handleSelect = (event) => {
    handleFilterCharacter(event.currentTarget.value);
  };

  return (
    <form className="form">
      <label htmlFor="quotesFilter">Filtrar por frase:</label>
      <input type="text" id="quotesFilter" name="quotesFilter" onInput={handleInput}/>

      <label htmlFor="characterFilter">Filtrar por personaje:</label>
      <select id="characterFilter" name="characterFilter" onChange={handleSelect}>
        <option value="ross">Ross</option>
        <option value="rachel">Rachel</option>
        <option value="monica">Monica</option>
        <option value="chandler">Chandler</option>
        <option value="joey">Joey</option>
        <option value="phoebe">Phoebe</option>
      </select>
    </form>
  );
}

export default Filters;
