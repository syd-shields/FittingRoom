import React from 'react';

const About = () => {
    return (
        <>
            <section className="h-100 bg-white p-5 flex-column justify-center">
                <h3 className='text-center-sm'>Who are we?</h3>
                <div className="flex-row justify-between justify-center-sm mt-3">
                <p className="mw-60 mw-100-sm text-center-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce libero risus, vehicula ut tellus quis, tincidunt luctus ligula. Nunc non lectus vel ante placerat bibendum. 
                    In vehicula, mauris at hendrerit hendrerit, urna nunc lobortis risus, at suscipit leo velit eget odio. 
                    In eu tortor placerat, lobortis orci vitae, pellentesque ex. Nunc mollis, mauris a lacinia faucibus, justo massa condimentum dui, interdum fermentum risus eros id eros. Etiam in tellus lacus. 
                </p>
                <div>
                    <img src={require('../assets/imgs/fashion-1.jpeg')} className='about-img d-none-sm'/>
                </div>
                </div>
            </section>
           
        </>
    );
};

export default About;