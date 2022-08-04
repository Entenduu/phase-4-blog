import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
                navigate('/')
            } else {
                r.json().then((errorData) => setErrors(errorData.errors))
                
            }
        })
    }

    return (
        <>
        <div className='login-container' >
            <form onSubmit={handleSubmit} className='login' >
                <h1>Login</h1>
                <label htmlFor="username"></label>
                <input
                placeholder="username"
                type="text"
                id="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                /><br></br>
                <label htmlFor="password"></label>
                <input
                placeholder="password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                <div style={{color: "yellow"}}>{errors.map((error) => error)}</div>
            </form>
        </div>
        </>
    );
}

export default Login;
