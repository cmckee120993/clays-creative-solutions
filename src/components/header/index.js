import React from 'react';

// images and styling
import './style.css';
import Logo from '../../images/clays-logo.webp';

function Header() {

    function english() {
        let link = document.location.href;
        let shortLink = link.split("http://localhost:3000/");
        let frCheck = shortLink[1].split('/');
        if (frCheck[0] === 'fr'){
            let newLink = shortLink[1].split('fr');
            document.location.href = 'http://localhost:3000' + newLink[1];
        } else {

        }

    }

    function french() {
        let link = document.location.href;
        let shortLink = link.split("http://localhost:3000");
        let frCheck = shortLink[1].split('/');
        if (frCheck[1] === 'fr'){
            
        } else {
        let newLink = 'http://localhost:3000/fr' + shortLink[1];
        document.location.href = newLink;
        }
    }
    if (document.location.href === 'http://localhost:3000/') {
    return (
        <div className='header'>
            {/* header image */}
            <div className='banner-div'>
           <img
            src={Logo}
            alt="Clay's Creative Solutions Title Banner"
            className='web-banner'
            />
            </div>
            <div className='lang-div'>
                {/* language options */}
                <button className='lang-btn' onClick={english}>🇺🇸 EN</button>
                <button onClick={french} className='lang-btn'>🇫🇷 FR</button>
            </div>
            <div className='service-list'>
                <li>Web Development</li>
                <li>*</li>
                <li>Marketing/SEO</li>
                <li>*</li>
                <li>Translation</li>
                <li>*</li>
                <li>Writing</li>
            </div> 
        </div>
    )
} else {
    return (
        <div className='header'>
            <div className='header-div'>
                <img    
                    src={Logo}
                    alt="Clay's Creative Solutions Logo"
                    className='header-logo'
                />
            </div>
            <div className='lang-div'>
                {/* language options */}
                <button className='lang-btn' onClick={english}>🇺🇸 EN</button>
                <button  className='lang-btn' onClick={french}>🇫🇷 FR</button>
            </div>
        </div>
    )
}
};

export default Header;