import React from 'react';
import './style.css';


function Developer() {
    return (
        <div className='web-home'>
             <h2 className='title'>Web Development and Marketing</h2>
            
             <div className='paragraph'>
                    <h2 className='home-title'>Web Development and Marketing</h2>
                    <p className='home-description'> Since 2015, I've been working with a literary journal as their outreach coordinator, graphic designer, web developer, and translator. Along the way
                    I worked with a few other companies to help their image. I then completed a coding bootcamp at UCLA in 2022. Since then, I have worked as a freelance developer and marketer
                    for a variety of businesses include a hairdresser, a flower shop, a beer distributor, and more! Whether you're looking for a logo, a pamphlet, a menu, or a website, I'm ready to get 
                    your company's image out there to the world.
                    Take a look at my <a className='internal-link' href='/developer-portfolio'>Developer Portfolio</a> for 
                    information on completed projects or my <a className='internal-link' href='/resume'>Résumé</a> to check out my work expxeriences. 
                    I look forward to working with you!
                    </p>
                </div>

            <div className='site-options'>
                <a className='option-link' href='/development-portfolio'>
                    <div className='square-4 square'>
                        <h2 className='site-option'>Portfolio</h2>
                    </div>
                    </a>
                    <a className='option-link' href='/development-rates'>
                    <div className='square-5 square'>
                        <h2 className='site-option'>Rates</h2>
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

export default Developer;