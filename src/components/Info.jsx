import React from 'react';

const Info = () => {
    return (
        <section className="h-100 bg-gray-100 p-4 flex-column justify-center align-content-center">
            
                
            <h3 className="mb-3 text-secondary">So ... how does this all work?</h3>

                <div className="flex-row align-center justify-between mb-3">
                    <span className="mr-3 text-secondary"><h1>01</h1></span>
                    <p className="mw-85">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce libero risus, vehicula ut tellus quis, tincidunt luctus ligula. Nunc non lectus vel ante placerat bibendum.
                        In vehicula, mauris at hendrerit hendrerit, urna nunc lobortis risus, at suscipit leo velit eget odio.
                    </p>
                </div>
            
            <div className="flex-row align-center justify-between mb-3">
                <p className="mw-85 text-right">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce libero risus, vehicula ut tellus quis, tincidunt luctus ligula. Nunc non lectus vel ante placerat bibendum.
                    In vehicula, mauris at hendrerit hendrerit, urna nunc lobortis risus, at suscipit leo velit eget odio.
                </p>
                <span className="ml-3 text-secondary"><h1>02</h1></span>
            </div>
            <div className="flex-row align-center justify-between">
                <span className="mr-3 text-secondary"><h1>03</h1></span>
                <p className="mw-85">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce libero risus, vehicula ut tellus quis, tincidunt luctus ligula. Nunc non lectus vel ante placerat bibendum.
                    In vehicula, mauris at hendrerit hendrerit, urna nunc lobortis risus, at suscipit leo velit eget odio.
                </p>
            </div>

        </section>
    )
}

export default Info;