import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-primary flex-row justify-between align-center p-4 text-white'>
            <div>
                <h3 className="mb-1">E-Stylist</h3>
                <h4>ⓒ E-Stylist 2022</h4>
            </div>

            <ul className="text-right">
                <li className="mb-1">
                    <a href="mailto:estylist@support.com">support@estylist.com</a>
                </li>
                <li>647-123-4567</li>
            </ul>
        </footer>
    );
};

export default Footer;