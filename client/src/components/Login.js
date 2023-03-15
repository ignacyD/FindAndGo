import { useState} from 'react';

function Login() {
    
    function handleSubmit(event) {
        event.preventDefault();
        console.log(loginData);
    }

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    })

    const updateData = e => {
        const fieldName = e.target.name
        setLoginData(existingValues => ({
            ...existingValues,
            [fieldName]: e.target.value,
        }))
    }

    return(
        <div className="login">
            <form onSubmit={handleSubmit}>
            <label>
                    <input
                        type="text"
                        placeholder="email"
                        name='email'
                        value={loginData.email}
                        onChange={updateData}
                    >
                    </input>
                </label>
                <label>
                    <input
                        type="password"
                        placeholder="Password"
                        name='password'
                        value={loginData.password}
                        onChange={updateData}
                    ></input>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login;