import { useState } from 'react';
import './Login.css';

function Login() {

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    })

    function handleSubmit(event) {
        event.preventDefault();
        console.log(loginData);
    }

    const updateData = e => {
        const fieldName = e.target.name
        setLoginData(existingValues => ({
            ...existingValues,
            [fieldName]: e.target.value,
        }))
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        placeholder="Email"
                        name='email'
                        value={loginData.email}
                        onChange={updateData}
                    />
                </label>
                <label>
                    <input
                        type="password"
                        placeholder="Password"
                        name='password'
                        value={loginData.password}
                        onChange={updateData}
                    />
                </label>
                <button type="submit">Submit</button>
                <p>If you don't have an account, please register</p>
                <button>Register</button>
            </form>
        </div>
    )
}

export default Login;