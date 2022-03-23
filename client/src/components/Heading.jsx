import React, { useCallback } from 'react'
import Background from '../assets/imgs/fashion-1.jpeg';

const Heading = ({ isModalOpen, onModalChange }) => {

    const handleModalChange = useCallback(e => {
        onModalChange(true)
    }, [onModalChange]);

    return (
        <section className="h-100 p-5 hero-img flex-column justify-between text-white" style={{ backgroundImage: `url(${Background})` }}>
            {/* <img className='hero-img cover' src={require('../assets/imgs/fashion-1.jpeg')} alt='Clothing Rack' /> */}

            <nav className="flex-row justify-between align-center">
                <h3><b>style</b>me</h3>
                <h4>
                    <a href="mailto:support@styleme.com">
                        support@styleme.com
                    </a>
                </h4>
            </nav>
            <div>
                <h1><span className="bolder">style</span><span className="unbold">me</span></h1>
                <h2>Now you can get personal style consultations from home!</h2>
            </div>
            <h4>
                <button className="btn-link text-white" onClick={handleModalChange}>
                    Sign up for early access ➞
                </button>
            </h4>

        </section>
    )
}

export default Heading
