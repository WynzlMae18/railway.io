import React, { useState } from "react"

export const Login = (props) => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    }
    return (
        <div className="auth-form-container">
            <h1>Login</h1>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label htmlFor="text">Username</label>

                <input value={user} onChange={(e) => setUser(e.target.value)} type="text" placeholder="Username" id="user" name="user"/>

                <label htmlFor="password">Password</label>

                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="pass" name="pass"/>

                <button>Login</button>
                
            </form>
            <p id = "or"> OR </p>
            <button className="bookBtn" onClick={() => props.onFormSwitch('')}>Book Ticket</button>
        </div>
    )
}