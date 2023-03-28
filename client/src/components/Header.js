import "./Header.css";
import { Link } from 'react-router-dom';

function Header({ isUserLogged, setIsUserLogged, userData, setUserData }) {

  function logout() {
    setIsUserLogged(false);
    setUserData("");
  }
  
  return (
    <div className="header">
      <Link to="/">
      <h1 className="header_name">Find&Go</h1>
      </Link>
      <div>
        {userData !== "" && <h3 className="welcome">Welcome, {userData.firstName}!</h3>}
        <Link to="/about">
          <button className="header_button">About</button>
        </Link>
        {isUserLogged && <Link to="/favourites"><button className="header_button">Favourites</button></Link>}
        {!isUserLogged && <Link to="/login"><button className="header_button" >Log In</button></Link>}
        {isUserLogged && <Link to="/"><button className="header_button" onClick={logout}>Log Out</button></Link>}
      </div>
    </div>
  )
}

export default Header;
