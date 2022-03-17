import React from 'react'
import Heading from '../components/Heading'
import Register from '../components/SignUp'
import About from '../components/About'
import Info from '../components/Info'
import Footer from '../components/Footer'

const LandingPage = () => {
    return (
        <>
            <Heading className="vh-100 bg-primary" />
            <Register className="vh-100 bg-secondary" />
            <About />
            <Info />
            <Footer />
        </>
    );
};

export default LandingPage;
