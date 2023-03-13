import React from 'react';
import './style.css';
import circleLogo from '../../images/clays-circle-logo.webp';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <footer className='footer'>
            <div className="links">
                <a href="https://github.com/cmckee120993" target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon alt='Clayton McKee Github' className='footer-icon' icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/clayton-mckee-ba992a123/" target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon alt='Clayton McKee LinkedIn' className='footer-icon' icon={faLinkedin} />
                </a>
                <a href="https://www.facebook.com/clayscreativesolutions" target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon alt='Clayton McKee Facebook' className='footer-icon' icon={faFacebook} />
                </a>
                <a href="https://www.instagram.com/clayscreativesolutions/" target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon alt='Clayton McKee Instagram' className='footer-icon' icon={faInstagram} />
                </a>
            </div>
            <div className='contact'>
                <a href= 'mailto:clayscreativesolutions@gmail.com' target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon alt='Clayton McKee Email' className='footer-icon' icon={faPaperPlane} />
                </a>
                <a href='https://wa.me/33769777978' target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon alt='Clayton McKee WhatsApp' className='footer-icon' icon={faWhatsapp}/>
                </a>
                <a href='tel:+33769777978' target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon alt='Clayton McKee Phone Number' className='footer-icon' icon={faPhone}/>
                </a>
            </div>
            <div className='creator-logo'>
                <img
                    src={circleLogo}
                    alt="Clay's Creative Solutions Mini Logo"
                />
                <p className='copyright'>©2023 Clay's Creative Solutions</p>
            </div>
        </footer>
    )
};

export default Footer;