import React from 'react'

const Register = () => {
    return (
        <div>
            <h1>Register To Try Our Product</h1>
            <div className="register">
                <label for="email">Enter Email:</label>
                <p></p>
                <input id="email" type="email" required />
                <p></p>
                <label for="username">Enter Username:</label>
                <p></p>
                <input className="username" id="username" type="text" required />
                <p></p>
                <label for="password">Enter Password:</label>
                <p></p>
                <input className="password" id="password" type="password" required />
                <p></p>
                <input type="submit" className="registerBtn" value="Create Account" />

            </div>
        </div>
    )
}

export default Register
