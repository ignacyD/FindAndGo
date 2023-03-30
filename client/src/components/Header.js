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
        <img src="./logo.png"></img>
        <h1 className="header_name">Find&Go</h1>
      </Link>
      <div>
        {userData !== "" && <h3 className="welcome">Welcome, {userData.firstName}!</h3>}
        <Link to="/about">
          <button className="header_button">About</button>
        </Link>
        <Link to="/opinions">
          <button className="header_button">Opinions</button>
        </Link>
        {isUserLogged && <Link to="/favourites"><button className="header_button">Favourites</button></Link>}
        {!isUserLogged && <Link to="/login"><button className="header_button" >Log In </button></Link>}
        {isUserLogged && <Link to="/"><button className="header_button" onClick={logout}>Log Out  <i className="fa-solid fa-right-to-bracket"></i></button></Link>}
      </div>
    </div>
  )
}

export default Header;
