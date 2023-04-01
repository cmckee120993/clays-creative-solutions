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
                <br />
                <p>*Sous-titres disponibles en français faits par Clay</p>
            </div>

            <div className='site-options'>
                    <div className='circle'>
                        <a className='internal-link' href='/fr/development-portfolio'><h2 className='site-option' lang='fr'>Dossier de développeur</h2></a>
                    </div>
                    <div className='circle'>
                        <a className='internal-link' href='/fr/development-rates'><h2 className='site-option' lang='fr'>Les frais</h2></a>
                    </div>
                    <div className='circle'>
                        <a className='internal-link' href='/fr/contact'><h2 className='site-option' lang='fr'>Me Contactez</h2></a>
                    </div>
            </div>
        </div>
    )
};

export default Developer;