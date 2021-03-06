import React from 'react';

const About = () => {
    return (
        <>
            <section className="h-100 bg-white p-5 flex-column justify-center">
                <h3 className='text-center-sm'>Who are we?</h3>
                <div className="flex-row justify-between justify-center-sm mt-3">
                <p className="mw-60 mw-100-sm text-center-sm">
                    We're here to bring the personal connection back to your shopping experience.
                    <br /> <br />
                    We are an agency of expert stylists and fashion curators ready to bring personal consultation to the digital age. Our team has worked with a diverse group of clients, of all body types and personal styles. With the help of our service and 24/7 support staff your style troubles will be a thing of the past.
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