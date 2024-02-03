import '../scss/App.scss'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Frases de Friends</h1>
        <form>
        <label for="phraseFilter">Filtrar por frase:</label>
        <input type="text" id="phraseFilter" name="phraseFilter" />
        <label for="filtroPersonaje">Filtrar por personaje:</label>
        <select id="characterFilter" name="characterFilter">
          <option value="ross">Ross</option>
          <option value="rachel">Rachel</option>
          <option value="monica">Monica</option>
          <option value="chandler">Chandler</option>
          <option value="joey">Joey</option>
          <option value="phoebe">Phoebe</option>
        </select>
      </form>
      </header>
      <main>
        <ul>
          <li>Pivot! Pivot! Pivot! Pivot! Pivot! - <span>Ross</span></li>
        </ul>
      </main>
    </div>
  )
}

export default App
