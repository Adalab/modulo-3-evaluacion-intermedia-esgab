import Filters from './Filters'

function Header() {

  return (
    <header className="header">
      <h1 className="header__title">Frases de Friends</h1>
      <Filters />
    </header>
  );
}

export default Header;
