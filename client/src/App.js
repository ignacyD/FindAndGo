import "./App.css";
import Header from "./components/Header.js";
import Main from "./components/Main";
import Registration from "./components/Registration";
import Login from "./components/Login";
import About from "./components/About";
import Footer from "./components/Footer";
import Favourites from "./components/Favourites";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
    const [isUserLogged, setIsUserLogged] = useState(false);
    const [userData, setUserData] = useState("");
    
    return (
        <div className="App">
            <Header isUserLogged={isUserLogged} setIsUserLogged={setIsUserLogged} userData={userData} setUserData={setUserData} />
            <Routes>
                <Route path="/" element={<Main isUserLogged={isUserLogged} />} />
                <Route path="/login" element={<Login isUserLogged={isUserLogged} setIsUserLogged={setIsUserLogged} setUserData={setUserData}/>} />
                <Route path="/register" element={<Registration />} />
                <Route path="/favourites" element={<Favourites />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
