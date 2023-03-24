import React from 'react';
import '../styles/home.css';
import siteGif from '../images/site-gif.gif';

function Acceuil() {
    return (
        <div className='home'>
            <img 
                src={siteGif}
                alt='Gif of marketing, translation, and web development services.'
                className='header-gif'
            />
            <div className='content'>
                <div className='intro'>
                    <h2 className='home-title' lang='fr'>Le webmarketing et la création des sites web en anglais, arabe, français et espagnol</h2>
                    <p className='home-description' lang='fr'>Je m'appelle Clayton McKee et je vous promet d'être votre guichet unique pour tous 
                        vos besoins de site web, marketing et/ou traducition. Je suis prêt à travailler avec vous dans toutes les domaines, soit
                        pour mettre au jour votre site web, pour aider avec le noveau look de votre entreprise, pour créer ce look à partir de rien, pour accéder 
                        aux nouveax clients ou une combinaison! Jettez un œil à mon <a className='internal-link' href=''>Dossier de développeur</a>
                        pour des projets déjà terminés, mon <a className='internal-link' href=''>CV</a> pour des qualifications générales ou mon 
                        <a className='internal-link' href='/translation'>Dossier de traducteur</a> pour une liste des publications et des services. 
                        J'ai hâte de travailler avec vous!
                    </p>
                </div>
                <div className='site-options'>
                    <div className='circle'>
                        <a className='internal-link' href='/development'><h2 className='site-option' lang='fr'>Sites et Webmarketing</h2></a>
                    </div>
                    <div className='circle'>
                        <a className='internal-link' href='/translation'><h2 className='site-option'>Traduction et Révision</h2></a>
                    </div>
                    <div className='circle'>
                        <a className='internal-link' href='/contact'><h2 className='site-option'>Me contactez</h2></a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Acceuil;