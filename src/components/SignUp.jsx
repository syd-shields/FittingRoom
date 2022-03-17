import React, { useCallback } from 'react'

const SignUp = ({ isModalOpen, onModalChange }) => {

    const handleModalChange = useCallback(e => {
        onModalChange(false)
    }, [onModalChange]);

    return (
        <section className={`h-100 modal-screen align-center justify-center ${isModalOpen ? 'flex-row' : 'd-none'}`}>
            <form id="signUp" className="flex-column bg-white w-50 p-3">
            <div className="flex-row justify-between align-center mb-2">
                    <h3>Sign up for Early Access!</h3><span className="close-btn ml-2" onClick={handleModalChange}>×</span>
            </div>
                <label for="email" className="d-none">Email</label>
                <input id="email" name="email" type="email" placeholder="Email" className="mt-2 p-1" required />
                <label for="organization" className="d-none">Organization</label>
                <input id="organization" name="organization" type="text" placeholder="Organization" className="mt-2 p-1" required />
                <label for="phoneNo" className="d-none">Phone Number</label>
                <input id="phoneNo" name="phoneNo" placeholder="Phone Number" className="mt-2 p-1" required />
                <button type="submit" id="signUpBtn" className="mt-2" value="Create Account">
                    Yes, I'd like to receive updates!
                </button>

            </form>
        </section>
    )
}

export default SignUp;