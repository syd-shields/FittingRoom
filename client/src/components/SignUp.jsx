import React, { useCallback, useState } from 'react'
import axios from 'axios'

const SignUp = ({ isModalOpen, onModalChange }) => {

    const handleModalChange = useCallback(e => {
        onModalChange(false)
    }, [onModalChange]);

    const [email, setEmail] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [signedUp, setSignedUp] = useState(false);
    
    const signupHandler = async () => {
        try{
        const res =  await axios.post('/api/v1/signup', {
            email: email,
            businessName: businessName,
            phoneNumber: phoneNumber
        })
        console.log(res.data);
        } catch (err) {
        console.log(err)
    }
       }

    return (
        <section className={`h-100 modal-screen align-center justify-center ${isModalOpen ? 'flex-row' : 'd-none'}`}>
            <form id="signUp" className='bg-white w-60 p-4'  onSubmit={(e) => 
                {
                e.preventDefault();
                signupHandler()
                setSignedUp(true);
              }}>
            <div className="flex-row justify-between align-center mb-2">
                <h3 className="text-gray-400 mw-85">{` ${signedUp ? 'Thanks for signing up to receive updates!' : 'Sign up for Early Access!'}`}</h3><span className="close-btn ml-2" onClick={handleModalChange}>×</span>
            </div>

            <div className={`${signedUp ? 'd-none' : 'flex-column'}`}>

                <label for="email" className="d-none">Email</label>
                <input id="email" name="email" type="email" placeholder="Email" className="mt-2 p-2" onChange={(e) => setEmail(e.target.value)} required />
                <label for="organization" className="d-none">Organization</label>
                <input id="organization" name="organization" type="text" placeholder="Organization" className="mt-2 p-2" onChange={(e) => setBusinessName(e.target.value)} required />
                <label for="phoneNo" className="d-none">Phone Number</label>
                <input id="phoneNo" name="phoneNo" placeholder="Phone Number" className="mt-2 p-2" onChange={(e) => setPhoneNumber(e.target.value)} required />
                <button type="submit" id="signUpBtn" className="mt-2">
                    Yes, I'd like to receive updates!
                </button>
            </div>

            </form>
        </section>
    )
}

export default SignUp;