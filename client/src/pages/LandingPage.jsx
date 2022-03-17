import React, { useState } from 'react'
import Heading from '../components/Heading'
import SignUp from '../components/SignUp'
import About from '../components/About'
import Info from '../components/Info'
import Footer from '../components/Footer'

const LandingPage = () => {
    const modalState = false;
    const [modalOpen, setModalOpen] = useState(modalState);

    return (
        <>
            <Heading isModalOpen={modalOpen} onModalChange={setModalOpen} className="vh-100 bg-primary" />
            <SignUp isModalOpen={modalOpen} onModalChange={setModalOpen} className="vh-100 bg-secondary" />
            <About />
            <Info />
            <Footer />
        </>
    );
};

export default LandingPage;
