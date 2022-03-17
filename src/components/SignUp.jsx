import React from 'react'

const SignUp = () => {
    return (
        <section className="h-100 bg-secondary">
            <h3>Sign up for Early Access!</h3><span>×</span>
            <form id="signUp" className="flex-column">
                <label for="email">Enter Email:</label>
                <input id="email" type="email" required />
                <label for="organization">Organization</label>
                <input id="organization" type="text" required />
                <label for="phoneNo">Phone Number</label>
                <input id="phoneNo" type="password" required />
                <button type="submit" className="signUpBtn" value="Create Account">
                    Yes, I'd like to receive updates!
                </button>

            </form>
        </section>
    )
}

export default SignUp
