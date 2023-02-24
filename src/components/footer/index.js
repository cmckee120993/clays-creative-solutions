import React from 'react';
import './style.css';
import circleLogo from '../../images/clays-circle-logo.webp';

function Footer() {
    return (
        <>
        <div className='creator-logo'>
            <img
                src={circleLogo}
                alt="Clay's Creative Solutions Mini Logo"
            />
        </div>
        </>
    )
};

export default Footer;