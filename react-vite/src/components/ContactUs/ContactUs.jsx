import React from 'react';
import './ContactUs.css';

function ContactUs() {
    return (
        <div className='contact-block'>
            <h2>We're here to help</h2>
            <div>
                <ul className='contact-container'>
                    <li>Call Us:</li>
                    <li>(828) 254-7253</li>
                </ul>
                <ul className='contact-container'>
                    <li>Ask a Question:</li>
                    <li>kims.asiannmore@gmail.com</li>
                </ul>
                <ul className='contact-container'>
                    <li>Connect With Us:</li>
                    <li>(828) 254 7253</li>
                </ul>
            </div>
        </div>
    );
}

export default ContactUs;
