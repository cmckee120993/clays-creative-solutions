import React from 'react';
import './style.css';


function Translation() {
    return (
        <>
            <div className='site-options'>
                    <div className='circle'>
                        <a className='internal-link' href='/resume'><h2 className='site-option' lang='fr'>CV</h2></a>
                    </div>
                    <div className='circle'>
                        <a className='internal-link' href='/translation-rates'><h2 className='site-option' lang='fr'>Les frais</h2></a>
                    </div>
                    <div className='circle'>
                        <a className='internal-link' href='/contact'><h2 className='site-option' lang='fr'>Me Contactez</h2></a>
                    </div>
            </div>
        </>
    )
};

export default Translation;