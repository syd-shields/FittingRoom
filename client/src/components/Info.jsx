import React from 'react';

const Info = () => {
    return (
        <section className="h-100 bg-gray-100 p-5 flex-column justify-center">
            
            
            <h3 className="mb-4 text-primary text-center-sm">So ... how does this all work?</h3>

            <div className="flex-row align-center justify-between justify-center-sm mb-4 w-100">
                <span className="text-primary big-text">01</span>
                <p className="mw-85 text-center-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce libero risus, vehicula ut tellus quis, tincidunt luctus ligula. Nunc non lectus vel ante placerat bibendum.
                    In vehicula, mauris at hendrerit hendrerit, urna nunc lobortis risus, at suscipit leo velit eget odio.
                </p>
            </div>
            
            <div className="flex-row-reverse align-center justify-between justify-center-sm mb-4">
                <p className="mw-85 text-right text-center-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce libero risus, vehicula ut tellus quis, tincidunt luctus ligula. Nunc non lectus vel ante placerat bibendum.
                    In vehicula, mauris at hendrerit hendrerit, urna nunc lobortis risus, at suscipit leo velit eget odio.
                </p>
                <span className="text-primary big-text">02</span>
            </div>
            <div className="flex-row align-center justify-between justify-center-sm">
                    <span className="text-primary big-text">03</span>
                <p className="mw-85 text-center-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce libero risus, vehicula ut tellus quis, tincidunt luctus ligula. Nunc non lectus vel ante placerat bibendum.
                    In vehicula, mauris at hendrerit hendrerit, urna nunc lobortis risus, at suscipit leo velit eget odio.
                </p>
            </div>
            

        </section>
    )
}

export default Info;