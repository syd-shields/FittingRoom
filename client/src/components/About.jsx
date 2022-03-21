import React from 'react';

const About = () => {
    return (
        <>
            <section className="h-100 bg-white p-5 flex-column justify-center">
                <h3 className='text-center-sm'>Who are we?</h3>
                <div className="flex-row justify-between justify-center-sm mt-3">
                <p className="mw-60 mw-100-sm text-center-sm">
                    We're here bring the personal connection back to online retail. Our style experts 
                </p>
                <div>
                    <img src={require('../assets/imgs/fashion-2.jpeg')} className='about-img cover d-none-sm' alt="Stylist showing clothing on video call"/>
                </div>
                </div>
            </section>
           
        </>
    );
};

export default About;