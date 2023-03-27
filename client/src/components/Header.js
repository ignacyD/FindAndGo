import "./Header.css";
function Header({ isUserLogged, setIsUserLogged }) {
  
  return (
    <div className="header">
      <h1 className="header_name">Find&Go</h1>
      <div>
        <button className="header_button">About</button>
        {isUserLogged && <button className="header_button">Favourites</button>}
        {!isUserLogged && <button className="header_button" onClick={() => setIsUserLogged(true)}>Log In</button>}
        {isUserLogged && <button className="header_button" onClick={() => setIsUserLogged(false)}>Log Out</button>}
      </div>
    </div>
  )
}

export default Header;
