import { useState } from 'react'

function Registration() {
    const [registrationData, setRegistrationData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        retypePassword: ""
    })

    const updateData = e => {
        const fieldName = e.target.name
        setRegistrationData(existingValues => ({
            ...existingValues,
            [fieldName]: e.target.value,
        }))
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(registrationData)
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
                    >
                    </input>
                </label>
                <label>
                    <input
                        type="text"
                        placeholder="Last name"
                        name='lastName'
                        value={registrationData.lastName}
                        onChange={updateData}
                    ></input>
                </label>
                <label>
                    <input
                        type="email"
                        placeholder="Email"
                        name='email'
                        value={registrationData.email}
                        onChange={updateData}
                    ></input>
                </label>
                <label>
                    <input
                        type="password"
                        placeholder="Password"
                        name='password'
                        value={registrationData.password}
                        onChange={updateData}
                    ></input>
                </label>
                <label>
                    <input
                        type="password"
                        placeholder="Re-type password"
                        name='retypePassword'
                        value={registrationData.retypePassword}
                        onChange={updateData}
                    ></input>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Registration;