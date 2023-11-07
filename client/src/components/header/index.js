import React from 'react';

// images and styling
import './style.css';
import Logo from '../../images/clays-logo.webp';
import Nav from '../nav';

function Header() {

    let url = document.location.href;
    let frCheck = url.split('/', 4);

    function english() {
        console.log('english');
        let link = document.location.href;
        let shortLink = link.split("https://clayscreativesolutions.com/");
        let frCheck = shortLink[1].split('/');
        if (frCheck[0] === 'fr'){
            let newLink = shortLink[1].split('fr');
            document.location.href = 'https://clayscreativesolutions.com' + newLink[1];
        } else {

        }

    }

    function french() {
        console.log('french')
        let link = document.location.href;
        let shortLink = link.split("https://clayscreativesolutions.com/");
        let frCheck = shortLink[1].split('/');
        if (frCheck[0] === 'fr'){
            
        } else {
        let newLink = 'https://clayscreativesolutions.com/fr/' + shortLink[1];
        document.location.href = newLink;
        }
    }

    function decideNav() {
        console.log(window.innerWidth);
        if (window.innerWidth <= 600) {
            return(
            <Nav />
            )
        } else if (window.innerWidth >= 600 && frCheck[3] === 'fr') {
            return(
                <div className='nav-div'>
                    <a className='nav-btn' href='/'>Acceuil</a>
                    <a className='nav-btn' href='/fr/development'>Sites et webmarketing</a>
                    <a className='nav-btn' href='/fr/translation'>Traduction et révision</a>
                    <a className='nav-btn' href='/fr/articles'>Blog</a>
                    <a className='nav-btn' href='/fr/about'>À propos</a>
                    <a className='nav-btn' href='/fr/contact'>Me contactez</a>
                </div>
            )
        } else {
            return(
                <div className='nav-div'>
                    <a className='nav-btn' href='/'>Home</a>
                    <a className='nav-btn' href='/development'>Web Development and Marketing</a>
                    <a className='nav-btn' href='/translation'>Editing and Translation</a>
                    <a className='nav-btn' href='/articles'>Blog</a>
                    <a className='nav-btn' href='/about'>About</a>
                    <a className='nav-btn' href='/contact'>Contact</a>
                </div>
            )
        }
    }

    if (document.location.href === 'https://clayscreativesolutions.com/') {
    return (
        <div className='header'>
            <div className='upper-header'>
                
                <div className='lang-div'>
                    <button className='lang-button' onClick={english}>
                        🇺🇸
                    </button>
                    <button className='lang-button' onClick={french}>
                        🇫🇷
                    </button>
                </div>
                
            </div>
            <div className='logo-div'>
                <a href='https://clayscreativesolutions.com'>
                    <img  
                        src={Logo}
                        alt="Clay's Creative Solutions Title Banner"
                        className='header-logo'
                    />
                </a>
            </div>
            {decideNav()}
        </div>
    )
} else if (document.location.href === 'https://clayscreativesolutions.com/fr') {
    return (
        <div className='header'>
            
            <div className='upper-header'>

                <div className='lang-div'>
                    <button className='lang-button' onClick={english}>
                        🇺🇸
                    </button>
                    <button className='lang-button' onClick={french}>
                        🇫🇷
                    </button>
                </div>
            </div>
            <div className='logo-div'>
            <a href='https://clayscreativesolutions.com'>
                    <img  
                        src={Logo}
                        alt="Clay's Creative Solutions Title Banner"
                        className='header-logo'
                    />
                </a>
            </div>
            {decideNav()}
        </div>
    )
} else {
    return (
        <div className='header'>
            
            <div className='upper-header'>

                <div className='lang-div'>
                    <button className='lang-button' onClick={english}>
                        🇺🇸
                    </button>
                    <button className='lang-button' onClick={french}>
                        🇫🇷
                    </button>
                </div>
           
            </div>
            <div className='logo-div'>
                <a href='https://clayscreativesolutions.com'>
                    <img  
                        src={Logo}
                        alt="Clay's Creative Solutions Title Banner"
                        className='header-logo'
                    />
                </a>
            </div>
            {decideNav()}
        </div>
    )
}
};

export default Header;