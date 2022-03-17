import React from 'react';

const Info = () => {
    return (
        <section className="h-100 bg-gray-100 p-4 flex-column justify-center align-content-center">
            
            <div className="mw-85">
            <h3 className="mb-4 text-secondary">So ... how does this all work?</h3>

                <div className="flex-row align-center justify-between mb-4">
                    <span className="mr-2 text-secondary big-text">01</span>
                    <p className="mw-85">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce libero risus, vehicula ut tellus quis, tincidunt luctus ligula. Nunc non lectus vel ante placerat bibendum.
                        In vehicula, mauris at hendrerit hendrerit, urna nunc lobortis risus, at suscipit leo velit eget odio.
                    </p>
                </div>
            
            <div className="flex-row align-center justify-between mb-4">
                <p className="mw-85 text-right">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce libero risus, vehicula ut tellus quis, tincidunt luctus ligula. Nunc non lectus vel ante placerat bibendum.
                    In vehicula, mauris at hendrerit hendrerit, urna nunc lobortis risus, at suscipit leo velit eget odio.
                </p>
                    <span className="ml-2 text-secondary big-text">02</span>
            </div>
            <div className="flex-row align-center justify-between">
                    <span className="mr-2 text-secondary big-text">03</span>
                <p className="mw-85">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce libero risus, vehicula ut tellus quis, tincidunt luctus ligula. Nunc non lectus vel ante placerat bibendum.
                    In vehicula, mauris at hendrerit hendrerit, urna nunc lobortis risus, at suscipit leo velit eget odio.
                </p>
            </div>
            </div>

        </section>
    )
}

export default Info;