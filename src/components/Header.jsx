import friendsLogo from "../images/friends-logo.png";

function Header() {

  return (
    <header className="header">
      <h1 className="header__title">Frases de </h1>
      <img className="header__logo" src={friendsLogo} alt="Logo Friends" />
    </header>
  );
}

export default Header;
