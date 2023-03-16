import "./Header.css";
import { useState } from "react";

function Header() {
  const [isUserLogged, setIsUserLogged] = useState(false);

  return (
    <div className="header">
      <h1 className="name">Find&Go</h1>
      <button className="button">Contact</button>
      <button className="button">About</button>
      {isUserLogged && <button className="button">Favourites</button>}
      {!isUserLogged && <button className="button" onClick={() => setIsUserLogged(true)}>Log In</button>}
      {isUserLogged && <button className="button" onClick={() => setIsUserLogged(false)}>Log Out</button>}
    </div>
  )
}

export default Header;
