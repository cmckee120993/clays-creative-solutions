import React from 'react';
import './style.css';


function Developer() {
    return (
        <div className='web-home'>
            <div className='video-div'>
                <iframe
                title="Intro video to Clay's Creative Solutions"
                src='https://youtube.com/embed/UEY7BA_GefU?autoplay=1&mute=1'>
                </iframe>
            </div>
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
        </div>
    )
};

export default Developer;