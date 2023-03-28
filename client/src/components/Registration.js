import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Registration.css'


function Registration() {

    const [message, setMessage] = useState("");
    const [doPasswordsMatch, setdoPasswordsMatch] = useState(false)
    const [registrationData, setRegistrationData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        retypePassword: ""
    })
    const navigate = useNavigate();


    useEffect(()=>{
        if(registrationData.password==="" && registrationData.retypePassword===""){
        setMessage("Please Provide password")
        }else if(registrationData.password===registrationData.retypePassword){
            setMessage("Please submit") 
            setdoPasswordsMatch(true)
        }else{
        setMessage("Passwords don't match")
        setdoPasswordsMatch(false)
        }
    },[registrationData.password, registrationData.retypePassword])


    const updateData = e => {
        const fieldName = e.target.name
        setRegistrationData(existingValues => ({
            ...existingValues,
            [fieldName]: e.target.value,
        }))
    }

    function handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:3001/users/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registrationData)
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                navigate("/login")
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className="registration">
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        placeholder="First name"
                        name='firstName'
                        value={registrationData.firstName}
                        onChange={updateData}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        placeholder="Last name"
                        name='lastName'
                        value={registrationData.lastName}
                        onChange={updateData}
                    />
                </label>
                <label>
                    <input
                        type="email"
                        placeholder="Email"
                        name='email'
                        value={registrationData.email}
                        onChange={updateData}
                    />
                </label>
                <p>{message}</p>
                <label>
                    <input
                        type="password"
                        placeholder="Password"
                        name='password'
                        value={registrationData.password}
                        onChange={updateData}
                    />
                </label>
                <label>
                    <input
                        type="password"
                        placeholder="Re-type password"
                        name='retypePassword'
                        value={registrationData.retypePassword}
                        onChange={updateData}
                    />
                </label>
                <button disabled={!doPasswordsMatch} type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Registration;