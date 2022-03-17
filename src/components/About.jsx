import React from 'react';

const About = () => {
    return (
        <>
            <section className="h-100 bg-white p-5 flex-column justify-center">
                <h3>Who are we?</h3>
                <div className="flex-row justify-between mt-3">
                <p className="mw-60">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce libero risus, vehicula ut tellus quis, tincidunt luctus ligula. Nunc non lectus vel ante placerat bibendum. 
                    In vehicula, mauris at hendrerit hendrerit, urna nunc lobortis risus, at suscipit leo velit eget odio. 
                    In eu tortor placerat, lobortis orci vitae, pellentesque ex. Nunc mollis, mauris a lacinia faucibus, justo massa condimentum dui, interdum fermentum risus eros id eros. Etiam in tellus lacus. 
                </p>
                <div>
                    <img src="https://picsum.photos/300/500" alt="description will go here" />
                </div>
                </div>
            </section>
           
        </>
    );
};

export default About;