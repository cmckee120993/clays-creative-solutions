import React from 'react';
import '../styles/home.css';
import siteGif from '../images/site-gif.gif';

function Home() {
    return (
        <div className='home'>
            <img 
                src={siteGif}
                alt='Gif of marketing, translation, and web development services.'
                className='header-gif'
            />
            <div className='content'>
                <div className='intro'>
                    <h2 className='home-title'>Digital Web Marketing in English, French, Arabic, and Spanish</h2>
                    <p className='home-description'>My name is Clayton McKee and I promise to be your one-stop-shop for any website, web marketing, or translation needs.
                        I am prepared to work with you in any capacity, whether that's updating a website for your company's new look, creating 
                        that look from scratch, accessing new markets, or a combination! Take a look at my <a className='internal-link' href='/developer'>Developer Portfolio</a> for 
                        information on completed projects, my <a className='internal-link' href='/resume'>Résumé</a> for general qualifications, or my <a className='internal-link' href='/translation'>Translation Portfolio </a>
                        for a list of publications and services. I look forward to working with you!
                    </p>
                </div>
                <div className='site-options'>
                    <div className='circle'>
                        <a className='internal-link' href='/development'><h2 className='site-option'>Web Marketing and Development</h2></a>
                    </div>
                    <div className='circle'>
                        <a className='internal-link' href='/translation'><h2 className='site-option'>Translation and Editing</h2></a>
                    </div>
                    <div className='circle'>
                        <a className='internal-link' href='/contact'><h2 className='site-option'>Contact Me</h2></a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;