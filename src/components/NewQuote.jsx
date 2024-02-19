import PropTypes from "prop-types";

function NewQuote({ handleClickAdd, newQuote, newCharacter, setNewQuote, setNewCharacter }) {

  const handleInputAddQuote = (event) => {
    setNewQuote(event.currentTarget.value);
  };

  const handleInputAddCharacter = (event) => {
    setNewCharacter(event.currentTarget.value);
  };

  return (
    <form className="addform">
      <h2 className="addform__title">Añadir nueva frase</h2>
      <div className="addform__add">      
        <label htmlFor="quote">Frase</label>
        <input
          className="input"
          type="text"
          name="quote"
          id="quote"
          value={newQuote}
          onChange={handleInputAddQuote}
        />
      </div>
      <div className="addform__add">   
        <label htmlFor="character">Personaje</label>
        <input
          className="input"
          type="text"
          name="character"
          id="character"
          value={newCharacter}
          onChange={handleInputAddCharacter}
        />
      </div>
      <input
        className="addform__button"
        type="button"
        value="Añadir nueva frase"
        onClick={handleClickAdd}
      />
    </form>
  );
}

NewQuote.propTypes = {
  handleClickAdd: PropTypes.func.isRequired,
  newQuote: PropTypes.string.isRequired,
  newCharacter: PropTypes.string.isRequired,
  setNewQuote: PropTypes.func.isRequired,
  setNewCharacter: PropTypes.func.isRequired,
};

export default NewQuote;
