import React from 'react';

// images and styling
import './style.css';
import WebBanner from '../../images/website-header.webp';
import Logo from '../../images/clays-logo.webp';

function Header() {
    if (document.location.href === 'http://localhost:3000/') {
    return (
        <>
            {/* header image */}
           <img
            src={WebBanner}
            alt="Clay's Creative Solutions Title Banner"
            className='web-banner'
            />

            {/* language options */}
            {/* <button>🇺🇸 EN</button>
            <button>🇫🇷 FR</button> */}

            <div className='service-list'>
                <li>Web Development</li>
                <li>*</li>
                <li>Marketing/SEO</li>
                <li>*</li>
                <li>Translation</li>
                <li>*</li>
                <li>Writing</li>
            </div> 
        </>
    )
} else {
    return (
        <div className='header-div'>
            <img    
                src={Logo}
                alt="Clay's Creative Solutions Logo"
                className='header-logo'
            />
        </div>
    )
}
};

export default Header;