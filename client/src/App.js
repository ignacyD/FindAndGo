import "./App.css";
import Header from "./components/Header.js";
import Main from "./components/Main";
import Registration from "./components/Registration";
import Login from "./components/Login";
import About from "./components/About";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
    const [isUserLogged, setIsUserLogged] = useState(false);

    return (
        <div className="App">
            <Header isUserLogged={isUserLogged} setIsUserLogged={setIsUserLogged}  />
            <Main isUserLogged={isUserLogged}/>
            <Registration />
            <Login />
            <About />
            <Footer />
        </div>
    );
}

export default App;
