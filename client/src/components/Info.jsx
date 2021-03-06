import React from 'react';

const Info = () => {
    return (
        <section className="h-100 bg-gray-100 p-5 flex-column justify-center">
            
            
            <h3 className="mb-4 text-primary text-center-sm">So ... how does this all work?</h3>

            <div className="flex-row align-center justify-between justify-center-sm mb-4 w-100">
                <span className="text-primary big-text">01</span>
                <p className="mw-85 text-center-sm">
                    Sign up to get early access to style<b>me</b>! You'll be the first to know when we're ready to launch. You'll also get access to early-bird discounts.
                </p>
            </div>
            
            <div className="flex-row-reverse align-center justify-between justify-center-sm mb-4">
                <p className="mw-85 text-right text-center-sm">
                    Once we're launched, you can find stylists available in your area. See how stylists are rated and find someone who bests suits your personal style goals.
                </p>
                <span className="text-primary big-text">02</span>
            </div>
            <div className="flex-row align-center justify-between justify-center-sm">
                    <span className="text-primary big-text">03</span>
                <p className="mw-85 text-center-sm">
                    Make a virtual or in-person appointment with your stylist. You can shop online and video call our stylists to get real-time, personalized style advice. Then, review your stylist so that others can can see how well they did! 
                </p>
            </div>
            

        </section>
    )
}

export default Info;