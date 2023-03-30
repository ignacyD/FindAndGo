import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Registration.css'
import passwordValidator from "password-validator"

function Registration() {
    const [message, setMessage] = useState("");
    const [validMessage, setValidMessage] = useState("");
    const [isReadyForSubmit, setIsReadyForSubmit] = useState(false)
    const [isPasswordStrong, setIsPasswordStrong] = useState(false)
    const [registrationData, setRegistrationData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        retypePassword: ""
    })
    const navigate = useNavigate();

    const schema = new passwordValidator();

    schema
        .is().min(8)
        .has().digits(2)

    useEffect(() => {
       
        if(!registrationData.firstName && !registrationData.lastName && !registrationData.email ){
            setMessage("all fields with * need to be filled in");
            setIsReadyForSubmit(false);
        }
    
        else if (registrationData.password === registrationData.retypePassword) {
            setMessage("")
            setIsReadyForSubmit(true)
        } else {
            setMessage("Passwords don't match")
            setIsReadyForSubmit(false)
        }
    }, [registrationData])

    useEffect(() => {
        if (!schema.validate(registrationData.password)) {
            setValidMessage("Password must contain 8 characters and at least 2 digits")
            setIsPasswordStrong(false)
        }
        else {
            setValidMessage("")
            setIsPasswordStrong(true)
        }
    }, [registrationData.password])


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
            <div>Registration</div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        placeholder="*First name"
                        name='firstName'
                        value={registrationData.firstName}
                        onChange={updateData}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        placeholder="*Last name"
                        name='lastName'
                        value={registrationData.lastName}
                        onChange={updateData}
                    />
                </label>
                <label>
                    <input
                        type="email"
                        placeholder="*Email"
                        name='email'
                        value={registrationData.email}
                        onChange={updateData}
                    />
                </label>
                <label>
                    <input
                        type="password"
                        placeholder="*Password"
                        name='password'
                        value={registrationData.password}
                        onChange={updateData}
                    />
                </label>
                <label>
                    <input
                        type="password"
                        placeholder="*Re-type password"
                        name='retypePassword'
                        value={registrationData.retypePassword}
                        onChange={updateData}
                    />
                </label>
                <p>{message}</p>
                <p>{validMessage}</p>
                <button disabled={!(isReadyForSubmit && isPasswordStrong)} type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Registration;