import React from 'react';

const Info = () => {
    return (
        <section className="h-100 bg-gray-100 p-3">
            <h3 className="mb-3">So ... how does this all work?</h3>
            <div className="flex-row align-center mb-3">
                <span className="mr-3">1</span>
                <p className="mw-75">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce libero risus, vehicula ut tellus quis, tincidunt luctus ligula. Nunc non lectus vel ante placerat bibendum.
                    In vehicula, mauris at hendrerit hendrerit, urna nunc lobortis risus, at suscipit leo velit eget odio.
                </p>
            </div>
            <div className="flex-row align-center mb-3">
                <p className="mw-75">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce libero risus, vehicula ut tellus quis, tincidunt luctus ligula. Nunc non lectus vel ante placerat bibendum.
                    In vehicula, mauris at hendrerit hendrerit, urna nunc lobortis risus, at suscipit leo velit eget odio.
                </p>
                <span className="ml-3">2</span>
            </div>
            <div className="flex-row align-center">
                <span className="mr-3">3</span>
                <p className="mw-75">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce libero risus, vehicula ut tellus quis, tincidunt luctus ligula. Nunc non lectus vel ante placerat bibendum.
                    In vehicula, mauris at hendrerit hendrerit, urna nunc lobortis risus, at suscipit leo velit eget odio.
                </p>
            </div>

        </section>
    )
}

export default Info;