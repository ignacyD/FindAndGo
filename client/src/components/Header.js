import "./Header.css";
import { useState } from "react";

function Header() {
  const [favourButtonDisplay, setfavourButtonDisplay] = useState(false);
  const [logOutButtonDisplay, setlogOutButtonDisplay] = useState(false);

  function handleLogInClick(e) {
    e.preventDefault();
    setfavourButtonDisplay(true);
    setlogOutButtonDisplay(true);

  }
  return (
    <div className="header">
      <header>
        <nav>
          <h1 className="name">Find&Go</h1>
          <button className="button">Contact</button>
          <button className="button">About</button>
          {favourButtonDisplay && <button className="button">Favourites</button>}
          {!favourButtonDisplay && !logOutButtonDisplay && <button className="button" onClick={handleLogInClick}>Log In</button>}
          {logOutButtonDisplay && <button className="button">Log Out</button>}
        </nav>
      </header>
    </div>
  )
}

export default Header;
