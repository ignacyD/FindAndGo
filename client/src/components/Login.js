import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login({ isUserLogged, setIsUserLogged }) {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    function handleSubmit(event) {
        event.preventDefault();
        fetch("http://localhost:3001/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    setIsUserLogged(true);
                    console.log("You're now logged");
                } else {
                    setIsUserLogged(false);
                    console.log("Something went wrong, try again");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const updateData = (e) => {
        const fieldName = e.target.name;
        setLoginData((existingValues) => ({
            ...existingValues,
            [fieldName]: e.target.value,
        }));
    };

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={loginData.email}
                        onChange={updateData}
                    />
                </label>
                <label>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={loginData.password}
                        onChange={updateData}
                    />
                </label>
                <button type="submit">Submit</button>
                <p>If you don't have an account, please register</p>
            </form>
            <Link to="/register">
                <button>Register</button>
            </Link>
        </div>
    );
}

export default Login;
