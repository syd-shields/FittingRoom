import React from 'react';

const Info = () => {
    return (
        <section className="h-100 bg-gray-100 p-5 flex-column justify-center">
            
            
            <h3 className="mb-4 text-primary text-center-sm">So ... how does this all work?</h3>

            <div className="flex-row align-center justify-between justify-center-sm mb-4 w-100">
                <span className="text-primary big-text">01</span>
                <p className="mw-85 text-center-sm">
                    Sign up so that we can chat with you! We'll assess the needs of your store, and match you with stylists who will become experts in your catalogue and customers.
                </p>
            </div>
            
            <div className="flex-row-reverse align-center justify-between justify-center-sm mb-4">
                <p className="mw-85 text-right text-center-sm">
                    We provide your store with fashion experts who have experience providing virtual consultations. Not ready to take on new staff? No problem—we'll train your existing sales associates. 
                </p>
                <span className="text-primary big-text">02</span>
            </div>
            <div className="flex-row align-center justify-between justify-center-sm">
                    <span className="text-primary big-text">03</span>
                <p className="mw-85 text-center-sm">
                    Customers can shop online and video call our sales associates any time to get real-time, personalized style advice.
                </p>
            </div>
            

        </section>
    )
}

export default Info;