import React from 'react';

// images and styling
import './style.css';
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
        if (window.innerWidth <= 800) {
            return(
                <div className='lower-header'>
            <div className='nav-div'>
                <Nav />
            </div>
            <div className='lang-div'>
            <button className='lang-button' onClick={english}>
                🇺🇸
            </button>
            <button className='lang-button' onClick={french}>
                🇫🇷
            </button>
            </div>
            </div>
            )
        } else if (window.innerWidth >= 800 && frCheck[3] === 'fr') {
            return(
                <div className='nav-div'>
                    <a className='nav-btn' href='/'>Acceuil</a>
                    <a className='nav-btn' href='/fr/development'>Sites/Marketing</a>
                    <a className='nav-btn' href='/fr/language'>Langage</a>
                    {/* <a className='nav-btn' href='/fr/articles'>Blog</a> */}
                    <a className='nav-btn' href='/fr/about'>À propos</a>
                    <a className='nav-btn' href='/fr/contact'>Me contactez</a>
                    <button className='lang-button' onClick={english}>
                        🇺🇸
                    </button>
                    <button className='lang-button' onClick={french}>
                        🇫🇷
                    </button>
                </div>
            )
        } else {
            return(
                <div className='nav-div'>
                    <a className='nav-btn' href='/'>Home</a>
                    <a className='nav-btn' href='/development'>Web/Marketing</a>
                    <a className='nav-btn' href='/language'>Language</a>
                    {/* <a className='nav-btn' href='/articles'>Blog</a> */}
                    <a className='nav-btn' href='/about'>About</a>
                    <a className='nav-btn' href='/contact'>Contact</a>
                    <button className='lang-button' onClick={english}>
                        🇺🇸
                    </button>
                    <button className='lang-button' onClick={french}>
                        🇫🇷
                    </button>
                </div>
            )
        }
    }

    if (document.location.href === 'https://clayscreativesolutions.com/') {
    return (
        <div className='header'>
            
            <div className='business-div'>
            <a className='home-link' href='https://clayscreativesolutions.com'>
                <h1 className='business-name'>Clay's Creative Solutions</h1>
                <h2 className='service-list'>Development * Marketing * Translation * Editing</h2>
            </a>
            </div>
            <div className='lower-header'>
            {decideNav()}
                <div className='lang-div'>
                </div>
            </div>
            
        </div>
    )
} else if (document.location.href === 'https://clayscreativesolutions.com/fr') {
    return (
        <div className='header'>
            
           
            <div className='business-div'>
            <a className='home-link' href='https://clayscreativesolutions.com'>
                <h1 className='business-name'>Clay's Creative Solutions</h1>
                <h2 className='service-list'>Développement * Marketing * Traduction * Rédaction</h2>
            </a>
            </div>
            <div className='lower-header'>
            {decideNav()}
                <div className='lang-div'>
                </div>
            </div>
            
        </div>
    )
} else {
    return (
        <div className='header'>
            <div className='business-div'>
            <a className='home-link' href='https://clayscreativesolutions.com'>
                <h1 className='business-name'>Clay's Creative Solutions</h1>
                <h2 className='service-list'>Development * Marketing * Translation * Editing</h2>
            </a>
            </div>
            
            <div className='lower-header'>
            {decideNav()}
                <div className='lang-div'>
                </div>
            </div>
            
            
        </div>
    )
}
};

export default Header;