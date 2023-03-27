import "./Header.css";
import { Link } from 'react-router-dom';

function Header({ isUserLogged, setIsUserLogged }) {
  
  return (
    <div className="header">
      <Link to="/">
      <h1 className="header_name">Find&Go</h1>
      </Link>
      <div>
        <Link to="/about">
          <button className="header_button">About</button>
        </Link>
        {isUserLogged && <Link to="/favourites"><button className="header_button">Favourites</button></Link>}
        {!isUserLogged && <Link to="/login"><button className="header_button" >Log In</button></Link>}
        {isUserLogged && <Link to="/"><button className="header_button" onClick={() => setIsUserLogged(false)}>Log Out</button></Link>}
      </div>
    </div>
  )
}

export default Header;
