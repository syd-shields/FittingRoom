import React from 'react';

const Info = () => {
    return (
        <section className="h-100 bg-gray-100 p-5 flex-column justify-center">
            
            <div className="">
            <h3 className="mb-4 text-primary">So ... how does this all work?</h3>

            <div className="flex-row align-center justify-between mb-4 w-100">
                <span className="text-primary big-text">01</span>
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
                    <span className="text-primary big-text">02</span>
            </div>
            <div className="flex-row align-center justify-between">
                    <span className="text-primary big-text">03</span>
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