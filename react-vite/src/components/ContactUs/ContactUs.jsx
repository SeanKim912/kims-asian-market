import "./ContactUs.css";

import instagram from '/images/instagram.svg';
import linkedin from '/images/linkedin.svg';
import tiktok from '/images/tiktok.svg'

function ContactUs() {
    return (
        <div className='contact-block'>
            <h2 className="contact-header">We&apos;re here to help</h2>
            <div>
                <ul className='contact-container'>
                    <li>Call Us:</li>
                    <li>(828) 254-7235</li>
                </ul>
                <ul className='contact-container'>
                    <li>Ask a Question:</li>
                    <li>kims.asiannmore@gmail.com</li>
                </ul>
                <ul className='contact-container'>
                    <li>Connect With Us:</li>
                    <li>
                        <img src={instagram} className='social-icon' />
                        <img src={linkedin} className='social-icon' />
                        <img src={tiktok} className='social-icon' />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ContactUs;
