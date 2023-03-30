import "./App.css";
import Header from "./components/Header.js";
import Main from "./components/Main";
import Registration from "./components/Registration";
import Login from "./components/Login";
import About from "./components/About";
import Footer from "./components/Footer";
import Favourites from "./components/Favourites";
import Opinions from "./components/Opinions";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
    const [isUserLogged, setIsUserLogged] = useState(false);
    const [userData, setUserData] = useState("");

    return (
        <div className="App">
            <Header isUserLogged={isUserLogged} setIsUserLogged={setIsUserLogged} userData={userData} setUserData={setUserData} />
            <Routes>
                <Route path="/" element={<Main isUserLogged={isUserLogged} userData={userData} setUserData={setUserData} />} />
                <Route path="/login" element={<Login isUserLogged={isUserLogged} setIsUserLogged={setIsUserLogged} setUserData={setUserData}/>} />
                <Route path="/register" element={<Registration />} />
                <Route path="/favourites" element={<Favourites userData={userData} setUserData={setUserData}/>} />
                <Route path="/about" element={<About />} />
                <Route path="/opinions" element={<Opinions isUserLogged={isUserLogged} userData={userData} />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
