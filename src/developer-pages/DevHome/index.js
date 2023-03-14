import React from 'react';
import headerImage from '../../images/web-development-ad.webp';
import './style.css';


function Developer() {
    return (
        <>
            <img
                src={headerImage}
                alt="Web development services"
                className="header-image"
            />
            <div className='site-options'>
                    <div className='circle'>
                        <a className='internal-link' href='/development-portfolio'><h2 className='site-option'>Portfolio</h2></a>
                    </div>
                    <div className='circle'>
                        <a className='internal-link' href='/development-rates'><h2 className='site-option'>Rates</h2></a>
                    </div>
                    <div className='circle'>
                        <a className='internal-link' href='/contact'><h2 className='site-option'>Contact Me</h2></a>
                    </div>
            </div>
        </>
    )
};

export default Developer;