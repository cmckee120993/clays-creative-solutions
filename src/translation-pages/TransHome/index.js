import React from 'react';
import './style.css';


function Translation() {
    return (
        <>
            <div className='site-options'>
                    <div className='circle'>
                        <a className='internal-link' href='/resume'><h2 className='site-option'>Resume</h2></a>
                    </div>
                    <div className='circle'>
                        <a className='internal-link' href='/translation-rates'><h2 className='site-option'>Rates</h2></a>
                    </div>
                    <div className='circle'>
                        <a className='internal-link' href='/contact'><h2 className='site-option'>Contact Me</h2></a>
                    </div>
            </div>
        </>
    )
};

export default Translation;