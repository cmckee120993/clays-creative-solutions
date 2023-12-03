import React from 'react';
import '../styles/home.css';
import Logo from '../images/clays-logo.webp';

function Home() {

    return (
        <div className='home'>
            <div className='home-welcome'>
            <div className='logo-div'>
                <a href='https://clayscreativesolutions.com'>
                    <img  
                        src={Logo}
                        alt="Clay's Creative Solutions Title Banner"
                        className='header-logo'
                    />
                </a>
            </div>
            
            <div className='web-welcome'>
                <div className='intro'>
                    <h2 className='home-title'>Marketing and Language Solutions</h2>
                    <p className='home-description'>My name is Clayton McKee and I promise to be your one-stop-shop for any website, web marketing, editing, writing, or translating needs.
                        I work with individuals or businesses on a variety of projects ranging from editing a manuscript to designing website/logo to hard coding an application.  Take a look at my <a className='internal-link' href='/developer'>Developer Portfolio</a> for 
                        information on completed projects, my <a className='internal-link' href='/resume'>Résumé</a> for general qualifications, or my <a className='internal-link' href='/translation'>Writing Portfolio </a>
                        for a list of publications and services. I look forward to working with you!
                    </p>
                </div>
            </div>
            </div>
                <div className='site-options'>
                <a className='option-link' href='/development'>
                    <div className='square-1 square'>
                        <h2 className='site-option'>Web Marketing and Development</h2>
                    </div>
                </a>
                <a className='option-link' href='/translation'>
                    <div className='square-2 square'>
                        <h2 className='site-option'>Translation and Editing</h2>
                    </div>
                </a>
                <a className='option-link' href='/contact'>
                    <div className='square-3 square'>
                        <h2 className='site-option'>Contact Me</h2>
                    </div>
                </a>    
                </div>
                
        </div>
    )
};

export default Home;