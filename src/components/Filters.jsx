function Filters() {

  return (
    <form className="form">
      <label htmlFor="phraseFilter">Filtrar por frase:</label>
      <input type="text" id="phraseFilter" name="phraseFilter" />
      <label htmlFor="filtroPersonaje">Filtrar por personaje:</label>
      <select id="characterFilter" name="characterFilter">
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
