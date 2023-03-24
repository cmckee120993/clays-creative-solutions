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
                        <a className='internal-link' href='/fr/development'><h2 className='site-option' lang='fr'>Dossier de développeur</h2></a>
                    </div>
                    <div className='circle'>
                        <a className='internal-link' href='/fr/development-rates'><h2 className='site-option' lang='fr'>Les frais</h2></a>
                    </div>
                    <div className='circle'>
                        <a className='internal-link' href='/fr/contact'><h2 className='site-option' lang='fr'>Me Contactez</h2></a>
                    </div>
            </div>
        </>
    )
};

export default Developer;